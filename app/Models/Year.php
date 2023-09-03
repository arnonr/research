<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Year extends Model
{

    use HasFactory;
    protected $table = 'year';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'title',
        'active',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
}
