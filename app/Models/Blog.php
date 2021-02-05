<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Blog extends Model {

	public static function allBlogs()
    {
        /**
         * Fetch all blogs that shown in blogs list page
         * and popular blogs in home page
         */

        // get all blogs according possition ASC
        $blogs = DB::select("
            SELECT * FROM blog_post WHERE published = 1 ORDER BY position ASC
        ");

        return $blogs;
    }
}
