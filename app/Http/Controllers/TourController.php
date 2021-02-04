<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tour;

class TourController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function popularTours() {

        $packges        = Tour::allPackages();
        $popularPackges = array_slice($packges, 0, 6);

        // dd($popularPackges);

          return response()->json(
            [
                'popularTour' => $popularPackges
            ],
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }
}
