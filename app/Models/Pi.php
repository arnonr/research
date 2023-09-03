<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pi extends Model
{

    use HasFactory;
    protected $table = 'pi';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'name',
        'year_id',
        'active',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function paper()
    {
        return $this->hasOne(Paper::Class);
    }
}
