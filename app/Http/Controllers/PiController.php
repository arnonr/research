<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pi;
use Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PiController extends Controller
{
    public function getAll(Request $request)
    {
        // User DB
        $data = Pi::select(
                'id as id',
                'name as name',
                'year_id as year_id',
                'active as active',
                'created_at as created_at',
                'updated_at as updated_at',
            )
            ->where('deleted_at', null);


        if ($request->id) {
            $data->where('id', $request->id);
        }

        if ($request->name) {
            $data->where('name','LIKE',"%".$request->name."%");
        }

        if ($request->year_id) {
            $data->where('year_id',$request->year_id);
        }

        $sort_by = $request->sort_by ? $request->sort_by : 'name';
        $sort_desc = $request->sort_desc ? $request->sort_desc : 'asc';

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
        $data = Pi::select(
            'id as id',
            'name as name',
            'year_id as year_id',
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
            'name as required',
            'year_id as required'
        ]);

        $name = $request->name;
        $year_id = $request->year_id;
        $active = 1;

        $data = new Pi;
        $data->name = $name;
        $data->year_id = $year_id;
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
            'name as required',
            'year_id as required',
            'id as required',
        ]);

        $name = $request->name;
        $year_id = $request->year_id;
        $active = $request->active;

        $data = Pi::where('id', $id)->first();

        $data->name = $name;
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
        $data = Pi::where('id', $id)->first();

        $data->active = 0;
        $data->deleted_at = Carbon::now();
        $data->save();

        $responseData = [
            'message' => 'success'
        ];

        return response()->json($responseData, 200);
    }
}
