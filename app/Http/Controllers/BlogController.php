<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function popularBlogs() {

        $blogs        = Blog::allBlogs();
        $popularBlogs = array_slice($blogs, 0, 3);
        
        return response()->json(
            [
                'homepageBlog' => $popularBlogs
            ],
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }
}
