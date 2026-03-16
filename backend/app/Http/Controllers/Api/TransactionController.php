<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Lista todas las transacciones del usuario autenticado.
     * Incluye filtros por categoría, tipo y rango de fechas.
     */
    public function index(Request $request)
    {
        $query = $request->user()->transactions()->with('category');

        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        if ($request->has('start_date') && $request->has('end_date')) {
            $query->whereBetween('date', [$request->start_date, $request->end_date]);
        }

        return response()->json($query->orderBy('date', 'desc')->paginate(15));
    }

    /**
     * Store a newly created resource in storage.
     */
    /**
     * Almacena una nueva transacción (ingreso o gasto).
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'amount' => 'required|numeric|min:0',
            'description' => 'nullable|string|max:255',
            'date' => 'required|date',
            'type' => 'required|in:income,expense',
        ]);

        $transaction = $request->user()->transactions()->create($request->all());

        return response()->json($transaction->load('category'), 201);
    }

    /**
     * Display the specified resource.
     */
    /**
     * Muestra el detalle de una transacción específica.
     * Verifica que la transacción pertenezca al usuario autenticado mediante Policies.
     */
    public function show(Transaction $transaction)
    {
        $this->authorize('view', $transaction);
        return response()->json($transaction->load('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    /**
     * Actualiza los datos de una transacción existente.
     */
    public function update(Request $request, Transaction $transaction)
    {
        $this->authorize('update', $transaction);

        $request->validate([
            'category_id' => 'sometimes|required|exists:categories,id',
            'amount' => 'sometimes|required|numeric|min:0',
            'description' => 'nullable|string|max:255',
            'date' => 'sometimes|required|date',
            'type' => 'sometimes|required|in:income,expense',
        ]);

        $transaction->update($request->all());

        return response()->json($transaction->load('category'));
    }

    /**
     * Remove the specified resource from storage.
     */
    /**
     * Elimina una transacción de la base de datos.
     */
    public function destroy(Transaction $transaction)
    {
        $this->authorize('delete', $transaction);
        $transaction->delete();

        return response()->json(null, 204);
    }

    /**
     * Get dashboard statistics.
     */
    /**
     * Genera estadísticas detalladas para el dashboard.
     * Calcula: Balance actual, Total ingresos, Total gastos y Gastos por categoría.
     */
    public function stats(Request $request)
    {
        $user = $request->user();

        $totalIncome = $user->transactions()->where('type', 'income')->sum('amount');
        $totalExpenses = $user->transactions()->where('type', 'expense')->sum('amount');
        $balance = $totalIncome - $totalExpenses;

        $expensesByCategory = $user->transactions()
            ->where('type', 'expense')
            ->selectRaw('category_id, sum(amount) as total')
            ->groupBy('category_id')
            ->with('category:id,name')
            ->get();

        return response()->json([
            'total_income' => $totalIncome,
            'total_expenses' => $totalExpenses,
            'balance' => $balance,
            'expenses_by_category' => $expensesByCategory
        ]);
    }
}
