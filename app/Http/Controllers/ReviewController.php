<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function addReview(Request $request) {

        $this->validate($request, [
            'name'      => 'required',
            'rate'      => 'required',
            'title'     => 'required',
            'review'    => 'required'
        ]);

        // dd($request->all());

        $name       = $request->name;
        $email      = $request->email;
        $title      = $request->title;
        $rate       = $request->rate;
        $review     = $request->review;
        $operator   = $request->operator_id;

        $data = [
            'full_name'     => $name,
            'email'         => $email,
            'title'         => $title,
            'description'   => $review,
            'rate'          => $rate,
            'user_id'       => $operator
        ];
        Review::addReview($data);

        // return redirect()->back();
    }
}
