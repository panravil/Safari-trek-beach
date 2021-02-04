<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Destination extends Model {

	public static function allDestinations()
    {
        /**
         * Fetch all destinations that shown in destinations list page
         * and top destinations in home page
         */

        // get all destinations according possition ASC
        $destinations = DB::select("
            SELECT * FROM destination_post WHERE published = 1 ORDER BY position ASC
        ");

        return $destinations;
    }
}
