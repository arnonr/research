<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paper;
use App\Models\Project;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class PaperController extends Controller
{
    public function getAll(Request $request)
    {
        // User DB
        $data = Paper::select(
                'paper.id as id',
                'paper.title as title',
                'paper.project_id as project_id',
                'paper.paper_type_id as paper_type_id',
                'paper.paper_status_id as paper_status_id',
                'paper.pi_id as pi_id',
                'pi.name as pi_name',
                'paper.file as file',
                'paper.created_at as created_at',
                'paper.updated_at as updated_at',
            )
            ->join('pi', 'pi.id', '=', 'paper.pi_id')
            ->join('project', 'project.id', '=', 'paper.project_id')
            ->where('paper.deleted_at', null);

        if ($request->id) {
            $data->where('paper.id', $request->id);
        }

        if ($request->title) {
            $data->where('paper.title','LIKE',"%".$request->title."%");
        }

        if ($request->year_id) {
            $data->where('project.year_id',$request->year_id);
        }

        if ($request->project_id) {
            $data->where('paper.project_id',$request->project_id);
        }

        if ($request->paper_type_id) {
            $data->where('paper.paper_type_id',$request->paper_type_id);
        }

        if ($request->paper_status_id) {
            $data->where('paper.paper_status_id',$request->paper_status_id);
        }

        if ($request->pi_id) {
            $data->where('paper.pi_id',$request->pi_id);
        }

        $order_by = $request->order_by ? $request->order_by : 'project_id';
        $order = $request->order ? $request->order : 'asc';

        $data = $data->orderBy($order_by, $order);
            
        $data = $data->get();
        
        return response()->json([
            'message' => 'success',
            'data' => $data,
        ], 200);
    }

    public function get($id)
    {
        // User DB
        $data = Paper::select(
            'id as id',
            'title as title',
            'project_id as project_id',
            'paper_type_id as paper_type_id',
            'paper_status_id as paper_status_id',
            'pi_id as pi_id',
            'file as file',
            'created_at as created_at',
            'updated_at as updated_at',
            )
            ->where('id', $id)
            ->first();
        
        return response()->json([
            'message' => 'success',
            'data' => $data,
        ], 200);
    }

    public function add(Request $request)
    {
        $request->validate([
            'title as required',
            'project_id as required',
            'paper_type_id as required',
            'paper_status_id as required',
            'pi_id as required',
        ]);

        $title = $request->title;
        $project_id = $request->project_id;
        $paper_type_id = $request->paper_type_id;
        $paper_status_id = $request->paper_status_id;
        $pi_id = $request->pi_id;
        $file = $request->file;
        $active = 1;

        $project = Project::where('project.id', $project_id)
            ->join('year','year.id','=','project.year_id')
            ->first();  

        $year = $project->name;

        $path = null;
        if(($file != "") && ($file != null) && ($file != 'null')){
            $fileName = Carbon::now()->timestamp.'-'.$request->file->getClientOriginalName();
            $path = '/paper/'.$year.'/'.$fileName;
            Storage::disk('public')->put($path, file_get_contents($file));
        }

        $data = new Paper;
        $data->title = $title;
        $data->project_id = $project_id;
        $data->paper_type_id = $paper_type_id;
        $data->paper_status_id = $paper_status_id;
        $data->pi_id = $pi_id;
        $data->file = $path;
        $data->active = $active;
        $data->created_by = 1;
        $data->updated_by = 1;
        $data->owner_id = 1;
        $data->save();

        $responseData = [
            'message' => 'success',
            'data' => $data,
        ];
        
        return response()->json($responseData, 200);
    }

    public function edit($id, Request $request)
    {
        $request->validate([
            'id as id',
            'title as required',
            'project_id as required',
            'paper_type_id as required',
            'paper_status_id as required',
            'pi_id as required',
        ]);

        $title = $request->title;
        $project_id = $request->project_id;
        $paper_type_id = $request->paper_type_id;
        $paper_status_id = $request->paper_status_id;
        $pi_id = $request->pi_id;
        $file = $request->file;
        $active = $request->active;
        
        // ->join('project','project.id','=','paper.project_id')
        $data = Paper::where('paper.id', $id)->first();

        $project = Project::where('project.id', $project_id)
        ->join('year','year.id','=','project.year_id')
        ->first();
        
        $year = $project->name;

        $path = null;
        if(($file != "") && ($file != 'null')){
            $fileName = Carbon::now()->timestamp.'-'.$request->file->getClientOriginalName();
            $path = '/paper/'.$year.'/'.$fileName;
            Storage::disk('public')->put($path, file_get_contents($file));
        }else{
            $path = $data->file;
        }

        $data->title = $title;
        $data->project_id = $project_id;
        $data->paper_type_id = $paper_type_id;
        $data->paper_status_id = $paper_status_id;
        $data->pi_id = $pi_id;
        $data->file = $path;
        $data->active = $active;
        $data->save();

        $responseData = [
            'message' => 'success',
            'data' => $data,
        ];
        
        return response()->json($responseData, 200);
    }

    public function delete($id)
    {
        $data = Paper::where('id', $id)->first();

        $data->active = 0;
        $data->deleted_at = Carbon::now();
        $data->save();

        $responseData = [
            'message' => 'success'
        ];

        return response()->json($responseData, 200);
    }
}
