<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectGoal;
use Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProjectGoalController extends Controller
{
    public function getAll()
    {
        // User DB
        $data = ProjectGoal::select(
                'id as id',
                'project_id as project_id',
                'paper_type_id as paper_type_id',
                'active as active',
                'created_at as created_at',
                'updated_at as updated_at',
            )
            ->where('active', 1)
            ->orderBy('name','DESC')
            ->get();
        
        return response()->json([
            'message' => 'success',
            'data' => $data,
        ], 200);
    }

    public function get($id)
    {
        // User DB
        $data = ProjectGoal::select(
            'id as id',
            'project_id as project_id',
            'paper_type_id as paper_type_id',
            'active as active',
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
            'project_id as required',
            'paper_type_id as required',
        ]);

        $project_id = $request->project_id;
        $paper_type_id = $request->paper_type_id;
        $active = 1;


        $data = new ProjectGoal;
        $data->project_id = $project_id;
        $data->paper_type_id = $paper_type_id;
        $data->active = $active;
        $data->save();

        $responseData = [
            'message' => 'success',
            'data' => $data,
        ];
        
        return response()->json($responseData, 200);
    }

    public function edit(Request $request)
    {
        
        $request->validate([
            'project_id as required',
            'paper_type_id as required',
            'id as required',
        ]);


        $id = $request->id;
        $project_id = $request->project_id;
        $paper_type_id = $request->paper_type_id;
        $active = $request->active;

        $data = ProjectGoal::where('id', $id)->first();

        $data->name = $name;
        $data->project_id = $project_id;
        $data->paper_type_id = $paper_type_id;
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
        $data = ProjectGoal::where('id', $id)->first();

        $data->active = 0;
        // $data->deleted_at = 
        $data->save();

        $responseData = [
            'message' => 'success'
        ];

        return response()->json($responseData, 200);
    }
}
