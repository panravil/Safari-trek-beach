<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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

// to show  popular tours
Route::get("/tour/popular-tours", 'App\Http\Controllers\TourController@popularTours');

// to show top destinations
Route::get("/destination/top-destinations", 'App\Http\Controllers\DestinationController@topDestinations');

// to show homepage blog
Route::get("/blog/homepage-blog", 'App\Http\Controllers\BlogController@popularBlogs');
