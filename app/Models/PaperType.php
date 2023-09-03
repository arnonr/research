<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PaperType extends Model
{

    use HasFactory;
    protected $table = 'paper_type';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'name',
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
