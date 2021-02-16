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

    public function listDestinations() {

      $destinations = Destination::allDestinations();

      // dd($destinations);

      return response()->json(
        [
          'destinationsList' => $destinations
        ],
        200,
        [],
        JSON_UNESCAPED_UNICODE
      );
    }

    public function postDetail($slug) {

      $details = Destination::postDetail($slug);

      // dd($details);

      return response()->json(
        [
          'post' => $details
        ],
        200,
        [],
        JSON_UNESCAPED_UNICODE
      );
    }
}
