<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProjectGoal extends Model
{

    use HasFactory;
    protected $table = 'project_goal';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'project_id',
        'paper_type_id',
        'active',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
}
