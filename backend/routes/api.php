<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\TransactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// --- Rutas Públicas (Registro e Inicio de Sesión) ---
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// --- Rutas Protegidas (Requieren autenticación vía Sanctum) ---
Route::middleware('auth:sanctum')->group(function () {
    // Autenticación y Perfil
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'me']);

    // Gestión de Categorías y Transacciones (CRUD)
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('transactions', TransactionController::class);
    
    // Estadísticas para el Panel de Control (Dashboard)
    Route::get('/dashboard/stats', [TransactionController::class, 'stats']);
});
