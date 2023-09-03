<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Paper;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ProjectController extends Controller
{
    public function getAll(Request $request)
    {
        // User DB
        $data = Project::select(
                'project.id as id',
                'project.title as title',
                'project.code as code',
                'project.project_type_id as project_type_id',
                'project.pm_id as pm_id',
                'project.year_id as year_id',
                'project.created_at as created_at', 
                'project.updated_at as updated_at',
            )
            ->with(['pm','project_type','papers','papers.pi','papers.paper_status','papers.paper_type'])
            // ->join('pm', 'pm.id', '=', 'project.pm_id')
            ->where('project.deleted_at', null);
            // ->where('paper.deleted_at', null);

        if ($request->id) {
            $data->where('project.id', $request->id);
        }

        if ($request->title) {
            $data->where('project.title','LIKE',"%".$request->title."%");
        }

        if ($request->code) {
            $data->where('project.code','LIKE',"%".$request->code."%");
        }

        if ($request->project_type_id) {
            $data->where('project.project_type_id',$request->project_type_id);
        }

        if ($request->pm_id) {
            $data->where('project.pm_id',$request->pm_id);
        }

        if ($request->year_id) {
            $data->where('project.year_id',$request->year_id);
        }

        $sort_by = $request->sort_by ? $request->sort_by : 'id';
        $sort_desc = $request->sort_desc ? 'desc' : 'asc';

        $data = $data->orderBy($sort_by, $sort_desc);
            
        $data = $data->get();

        return response()->json([
            'message' => 'success',
            'data' => $data,
        ], 200);
    }

    public function get($id)
    {
        // User DB
        $data = Project::select(
            'id as id',
            'title as title',
            'code as code',
            'project_type_id as project_type_id',
            'pm_id as pm_id',
            'year_id as year_id',
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
            'code as code',
            'project_type_id as required',
            'pm_id as required',
            'year_id as required',
        ]);

        $title = $request->title;
        $code = $request->code;
        $project_type_id = $request->project_type_id;
        $pm_id = $request->pm_id;
        $year_id = $request->year_id;
        $active = 1;


        $data = new Project;
        $data->title = $title;
        $data->code = $code;
        $data->year_id = $year_id;
        $data->project_type_id = $project_type_id;
        $data->pm_id = $pm_id;
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
            'code as code',
            'project_type_id as required',
            'pm_id as required',
            'year_id as required',
        ]);

        
        $title = $request->title;
        $code = $request->code;
        $project_type_id = $request->project_type_id;
        $pm_id = $request->pm_id;
        $year_id = $request->year_id;
        $active = $request->active;

        $data = Project::where('id', $id)->first();

        $data->title = $title;
        $data->code = $code;
        $data->project_type_id = $project_type_id;
        $data->pm_id = $pm_id;
        $data->year_id = $year_id;
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
        $data = Project::where('id', $id)->first();

        $data->active = 0;
        $data->deleted_at = Carbon::now();
        $data->save();

        $responseData = [
            'message' => 'success'
        ];

        return response()->json($responseData, 200);
    }
}
