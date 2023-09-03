<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pm extends Model
{

    use HasFactory;
    protected $table = 'pm';
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

    public function project()
    {
        return $this->hasOne(Project::Class);
    }
}
