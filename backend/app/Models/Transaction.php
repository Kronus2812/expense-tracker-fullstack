<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    // Campos que se pueden asignar masivamente
    protected $fillable = [
        'user_id',
        'category_id',
        'amount',
        'description',
        'date',
        'type'
    ];

    // Relación: Una transacción pertenece a un usuario
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación: Una transacción pertenece a una categoría
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
