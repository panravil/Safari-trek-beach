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

// to show popular tours
Route::get("/tour/popular-tours", 'App\Http\Controllers\TourController@popularTours');

// to show tour inner page details
Route::get("/tour/package/{id}", 'App\Http\Controllers\TourController@tourInnerDetail');

// to show filtered tours
Route::get("/tour/filter", 'App\Http\Controllers\TourController@filterTours');

// to show list of tour levels on filter
Route::get("/tour/level", 'App\Http\Controllers\TourController@tourLevel');

// to show list of tour activities on filter
Route::get("/tour/activity", 'App\Http\Controllers\TourController@tourActivity');

// to show list of tour specialized on filter
Route::get("/tour/focus", 'App\Http\Controllers\TourController@tourFocus');

// to show top destinations
Route::get("/destination/top-destinations", 'App\Http\Controllers\DestinationController@topDestinations');

// to show destinations list page
Route::get("/destination/list", 'App\Http\Controllers\DestinationController@listDestinations');

// to show destination inner page details
Route::get("/destination/post/{slug}", 'App\Http\Controllers\DestinationController@postDetail');

// to show homepage blog
Route::get("/blog/homepage-blog", 'App\Http\Controllers\BlogController@popularBlogs');

// to show blog list page
Route::get("/blog/list", 'App\Http\Controllers\BlogController@listBlogs');

// to show blog inner page details
Route::get("/blog/post/{slug}", 'App\Http\Controllers\BlogController@postDetail');

// to add new operator
Route::post("/operator/add", 'App\Http\Controllers\OperatorController@addOperator');

// to show operator list page
Route::get("/operator/list", 'App\Http\Controllers\OperatorController@listOperators');

// to show operator detals page
Route::get("/operator/detail/{id}", 'App\Http\Controllers\OperatorController@operatorDetail');

// to add review
Route::post("/review/add", 'App\Http\Controllers\ReviewController@addReview');

// to add quote
Route::post("/quote/add", 'App\Http\Controllers\QuoteController@addQuote');
