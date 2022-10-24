<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Paper extends Model
{

    use HasFactory;
    protected $table = 'paper';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'title',
        'project_id',
        'paper_type_id',
        'paper_status_id',
        'pi_id',
        'file',
        'active',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function project() {
        return $this->belongsTo(Project::class);
   }

   public function pi() {
    return $this->belongsTo(Pi::class);
   }

   public function paper_status() {
    return $this->belongsTo(PaperStatus::class);
   }

   public function paper_type() {
    return $this->belongsTo(PaperType::class);
   }
}
