<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;  

class Project extends Model
{

    use HasFactory;
    protected $table = 'project';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'title',
        'code',
        'project_type_id',
        'year_id',
        'pm_id',
        'active',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        'deleted_at',
    ];

    public function papers()
    {
        return $this->hasMany(Paper::Class, 'project_id','id')->where('paper.deleted_at',null);
    }

     public function pm()
    {
        return $this->belongsTo(Pm::Class,'pm_id','id');
    }

    public function project_type()
    {
        return $this->belongsTo(ProjectType::Class,'project_type_id','id');
    }
}
