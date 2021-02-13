<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Review extends Model {

	public static function addReview($data) {
        /**
         * Add new review
         */

        DB::table('review')->insert($data);
    }
}
