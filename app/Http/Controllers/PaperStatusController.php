<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PaperStatus;
use Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PaperStatusController extends Controller
{
    public function getAll(Request $request)
    {
        // User DB
        $data = PaperStatus::select(
                'id as id',
                'name as name',
                'paper_type_id as paper_type_id',
                'active as active',
                'created_at as created_at',
                'updated_at as updated_at',
            )
            ->where('deleted_at', null);

        if ($request->id) {
            $data->where('id',$request->id);
        }

        if ($request->paper_type_id) {
            $data->where('paper_type_id',$request->paper_type_id);
        }

        if ($request->name) {
            $data->where('name','LIKE',"%".$request->name."%");
        }

        $order_by = $request->order_by ? $request->order_by : 'id';
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
        $data = PaperStatus::select(
            'id as id',
            'name as name',
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
            'name as required',
            'paper_type_id as required',
        ]);

        $name = $request->name;
        $paper_type_id = $request->paper_type_id;
        $active = 1;


        $data = new PaperStatus;
        $data->name = $name;
        $data->paper_type_id = $paper_type_id;
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
            'paper_type_id as required',
            'id as required',
        ]);


        $id = $request->id;
        $name = $request->name;
        $paper_type_id = $request->paper_type_id;
        $active = $request->active;

        $data = PaperStatus::where('id', $id)->first();

        $data->name = $name;
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
        $data = PaperStatus::where('id', $id)->first();

        $data->active = 0;
        $data->deleted_at = Carbon::now();
        $data->save();

        $responseData = [
            'message' => 'success'
        ];

        return response()->json($responseData, 200);
    }
}
