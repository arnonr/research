<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PaperController;
use App\Http\Controllers\PaperStatusController;
use App\Http\Controllers\PaperTypeController;
use App\Http\Controllers\PiController;
use App\Http\Controllers\PmController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectGoalController;
use App\Http\Controllers\ProjectTypeController;
use App\Http\Controllers\YearController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'paper'], function () {
    Route::get('/{id}', [PaperController::class, 'get']);
    Route::get('/', [PaperController::class, 'getAll']);
    Route::post('/', [PaperController::class, 'add']);
    Route::put('/{id}', [PaperController::class, 'edit']);
    Route::delete('/{id}', [PaperController::class, 'delete']);
});

Route::group(['prefix' => 'paper-status'], function () {
    Route::get('/{id}', [PaperStatusController::class, 'get']);
    Route::get('/', [PaperStatusController::class, 'getAll']);
    Route::post('/', [PaperStatusController::class, 'add']);
    Route::put('/{id}', [PaperStatusController::class, 'edit']);
    Route::delete('/{id}', [PaperStatusController::class, 'delete']);
});

Route::group(['prefix' => 'paper-type'], function () {
    Route::get('/{id}', [PaperTypeController::class, 'get']);
    Route::get('/', [PaperTypeController::class, 'getAll']);
    Route::post('/', [PaperTypeController::class, 'add']);
    Route::put('/{id}', [PaperTypeController::class, 'edit']);
    Route::delete('/{id}', [PaperTypeController::class, 'delete']);
});

Route::group(['prefix' => 'pi'], function () {
    Route::get('/{id}', [PiController::class, 'get']);
    Route::get('/', [PiController::class, 'getAll']);
    Route::post('/', [PiController::class, 'add']);
    Route::put('/{id}', [PiController::class, 'edit']);
    Route::delete('/{id}', [PiController::class, 'delete']);
});

Route::group(['prefix' => 'pm'], function () {
    Route::get('/{id}', [PmController::class, 'get']);
    Route::get('/', [PmController::class, 'getAll']);
    Route::post('/', [PmController::class, 'add']);
    Route::put('/{id}', [PmController::class, 'edit']);
    Route::delete('/{id}', [PmController::class, 'delete']);
});

Route::group(['prefix' => 'project'], function () {
    Route::get('/{id}', [ProjectController::class, 'get']);
    Route::get('/', [ProjectController::class, 'getAll']);
    Route::post('/', [ProjectController::class, 'add']);
    Route::put('/{id}', [ProjectController::class, 'edit']);
    Route::delete('/{id}', [ProjectController::class, 'delete']);
});

Route::group(['prefix' => 'project-goal'], function () {
    Route::get('/{id}', [ProjectGoalController::class, 'get']);
    Route::get('/', [ProjectGoalController::class, 'getAll']);
    Route::post('/', [ProjectGoalController::class, 'add']);
    Route::put('/{id}', [ProjectGoalController::class, 'edit']);
    Route::delete('/{id}', [ProjectGoalController::class, 'delete']);
});

Route::group(['prefix' => 'project-type'], function () {
    Route::get('/{id}', [ProjectTypeController::class, 'get']);
    Route::get('/', [ProjectTypeController::class, 'getAll']);
    Route::post('/', [ProjectTypeController::class, 'add']);
    Route::put('/{id}', [ProjectTypeController::class, 'edit']);
    Route::delete('/{id}', [ProjectTypeController::class, 'delete']);
});

Route::group(['prefix' => 'year'], function () {
    Route::get('/{id}', [YearController::class, 'get']);
    Route::get('/', [YearController::class, 'getAll']);
    Route::post('/', [YearController::class, 'add']);
    Route::put('/{id}', [YearController::class, 'edit']);
    Route::delete('/{id}', [YearController::class, 'delete']);
});