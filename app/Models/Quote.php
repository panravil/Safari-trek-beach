<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Quote extends Model {

	public static function addQuote($data) {
        /**
         * Add new quote
         */

        DB::table('quote')->insert($data);
    }
}
