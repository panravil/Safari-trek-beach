<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Destination;

class DestinationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function topDestinations() {

        $destinations        = Destination::allDestinations();
        $popularDestinations = array_slice($destinations, 0, 12);
          return response()->json(
            [
                'topDestinations' => $popularDestinations
            ],
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }
}
