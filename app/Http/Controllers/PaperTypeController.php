<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PaperType;
use Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PaperTypeController extends Controller
{
    public function getAll(Request $request)
    {
        // User DB
        $data = PaperType::select(
                'id as id',
                'name as name',
                'active as active',
                'created_at as created_at',
                'updated_at as updated_at',
            )
            ->where('deleted_at', null);
        

        if ($request->id) {
            $data->where('id',$request->id);
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
        $data = PaperType::select(
            'id as id',
            'name as name',
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
        ]);

        $name = $request->name;
        $active = 1;

        $data = new PaperType;
        $data->name = $name;
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
            'id as required',
            'name as required',
        ]);


        $id = $request->id;
        $name = $request->name;
        $active = $request->active;

        $data = PaperType::where('id', $id)->first();

        $data->name = $name;
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
        $data = PaperType::where('id', $id)->first();

        $data->active = 0;
        $data->deleted_at = Carbon::now();
        $data->save();

        $responseData = [
            'message' => 'success'
        ];

        return response()->json($responseData, 200);
    }
}
