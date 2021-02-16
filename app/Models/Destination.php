<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Destination extends Model {

	public static function allDestinations() {
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

    public static function postDetail($slug) {
        /**
         * Fetch all details that concern with particullar post ID (slug)
         */

        $post = DB::select("
            SELECT * FROM destination_post WHERE post_slug = '$slug' AND published = 1
        ");

        if(count($post)) {
            $data = [];
            $post_id = $post[0]->post_id;

            // post details
            foreach($post as $p) {
                $data['post_id']            = $p->post_id;
                $data['title']              = $p->post_title;
                $data['sub_title']          = $p->post_sub_title;
                $data['slug']               = $p->post_slug;
                $data['description']        = $p->short_description;
                $data['post_image']         = $p->post_image;
                $data['post_inner_image']   = $p->post_page_image;
            }

            // post section details
            $sections = DB::select("
                SELECT * FROM destination_post_section WHERE post_id = $post_id
            ");
            foreach($sections as $key => $section) {
                $data['section'][$key]['title']         = $section->section_title;
                $data['section'][$key]['description']   = $section->section_description;
                $data['section'][$key]['button_name']   = $section->section_button_name;
                $data['section'][$key]['button_url']    = $section->section_button_url;
            }

            // post packages details
            $post_package = DB::select("
                SELECT p.package_id, p.user_id
                FROM destination_post_package dp, package p, user u
                WHERE dp.post_id = $post_id
                AND dp.package_id = p.package_id
                AND p.status = 1
                AND p.published = 1
                AND p.user_id = u.user_id
                AND u.status = 'active'
                AND u.published = 1
                GROUP BY p.package_id
            ");

            $data['package'] = [];
            foreach($post_package as $key => $package) {
                $package_id = $package->package_id;
                $user_id    = $package->user_id;

                $package_detail = DB::select("
                    SELECT * FROM package WHERE package_id = $package_id
                ");
                foreach($package_detail as $row) {
                    $data['package'][$key]['package_id']    = $row->package_id;
                    $data['package'][$key]['no_of_day']     = $row->no_of_day;
                    $data['package'][$key]['title']         = $row->title;
                    $data['package'][$key]['tour_group']    = $row->tour_group;
                    $data['package'][$key]['image_url']     = $row->image_url;
                }

                $user = DB::select("
                    SELECT * FROM user WHERE user_id = $user_id
                ");
                foreach($user as $row) {
                    $data['package'][$key]['company_name'] = $row->company_name;
                    $data['package'][$key]['tag'] = $row->tag;
                    $data['package'][$key]['operator_logo'] = $row->logo;
                }

                $getting_there = DB::select("
                    SELECT start_city, end_city FROM package_getting_there WHERE package_id = $package_id
                ");
                foreach($getting_there as $row) {
                    $data['package'][$key]['start_city']    = $row->start_city;
                    $data['package'][$key]['end_city']      = $row->end_city;
                }

                $rate = DB::select("
                    SELECT adult_currency FROM package_rate WHERE package_id = $package_id
                ");
                foreach($rate as $row) {
                    $data['package'][$key]['adult_currency'] = $row->adult_currency;
                }

                $review = DB::select("
                    SELECT COUNT(rate) as count, SUM(rate) as sum FROM review WHERE user_id = $user_id
                ");
                foreach($review as $row) {
                    $data['package'][$key]['num_review'] = $row->count;
                    $data['package'][$key]['avg_review'] = ($row->count > 0) ? round(($row->sum / $row->count), 1) : 0;
                }

                $level = DB::select("
                    SELECT level_title FROM package_level WHERE package_id = $package_id
                ");
                foreach($level as $row) {
                    $data['package'][$key]['level'][] = $row->level_title;
                }

                $destination = DB::select("
                    SELECT destination FROM package_day WHERE package_id = $package_id GROUP BY destination
                ");
                foreach($destination as $row) {
                    $data['package'][$key]['destination'][] = $row->destination;
                }
            }

            // post destination details
            $post_destination = DB::select("
                SELECT dp.post_title, dp.post_slug
                FROM destination_post dp, destination_post_post dpp
                WHERE dpp.post_id = $post_id
                AND dpp.post__id = dp.post_id
            ");

            $data['destination'] = [];
            foreach($post_destination as $key => $destination) {
                $data['destination'][$key]['title'] = $destination->post_title;
                $data['destination'][$key]['post_slug'] = $destination->post_slug;
            }

            return $data;
        }
    }
}
