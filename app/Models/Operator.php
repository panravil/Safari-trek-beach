<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Operator extends Model {

    public static function allOperators() {
        /**
         * Fetch all operators that shown in operator list page
         */

        $data = [];

        $operators = DB::select("
            SELECT user_id, company_name, brief, banner, logo
            FROM user WHERE status = 'active' AND role = 'operator' AND published = 1
            ORDER BY position ASC
        ");

        foreach ($operators as $key => $operator) {

            $data[$key] = (array) $operator;

            $review = DB::select("
                SELECT COUNT(rate) as count, SUM(rate) as sum FROM review WHERE user_id = $operator->user_id AND published = 1
            ");
            foreach ($review as $row) {
                $data[$key]['num_review'] = $row->count;
                $data[$key]['sum_review'] = ($row->count > 0) ? $row->sum : 0;
                $data[$key]['avg_review'] = ($row->count > 0) ? round(($row->sum / $row->count), 1) : 0;
            }
        }

        return $data;
    }

    public static function operatorDetail($user_id) {
        /**
         * Fetch all details that concern with particullar operator ID
         */

        $data = [];

        $operator = DB::select("
            SELECT *
            FROM user WHERE status = 'active' AND role = 'operator' AND published = 1 AND user_id = $user_id
        ");

        if ($operator) {

            $data['user_id']        = $operator[0]->user_id;
            $data['company_name']   = $operator[0]->company_name;
            $data['brief']          = $operator[0]->brief;
            $data['num_of_staff']   = $operator[0]->no_of_staff;
            $data['tour_type']      = $operator[0]->tour_type;
            $data['address']        = $operator[0]->address;
            $data['contact_person'] = $operator[0]->person_name;
            $data['description']    = $operator[0]->description;
            $data['banner']         = $operator[0]->banner;
            $data['logo']           = $operator[0]->logo;
            $data['tag']            = $operator[0]->tag;

            $reviews = DB::table('review')
                ->select('review_id', 'full_name', 'email', 'title', 'description', 'rate', 'created_at')
                ->where('user_id', $user_id)
                ->where('published', 1)
                ->get();

            $data['review'] = [];
            $data['sum_review'] = 0;
            $data['num_review'] = 0;
            $data['avg_review'] = 0;
            foreach ($reviews as $key => $review) {
                $data['review'][$key] = (array) $review;
                $data['sum_review'] += $review->rate;
                $data['num_review'] = $key+1;

                $review_reply = DB::table('review_reply')
                    ->select('description')
                    ->where('review_id', $review->review_id)
                    ->first();

                $reply = (array) $review_reply;
                $data['review'][$key]['reply'] = array_key_exists('description', $reply) ? $reply['description'] : null;
            }
            $data['avg_review'] = $data['sum_review'] > 0 ? round(($data['sum_review'] / $data['num_review']), 1) : 0;

            $packages = DB::select("
                SELECT * FROM package WHERE user_id = $user_id AND status = 1 AND published = 1 ORDER BY position ASC
            ");

            $data['package'] = [];
            foreach ($packages as $key => $package) {

                $data['package'][$key] = (array) $package;

                $getting_there = DB::select("
                    SELECT start_city, end_city FROM package_getting_there WHERE package_id = $package->package_id
                ");
                $data['package'][$key]['start_city']    = $getting_there[0]->start_city;
                $data['package'][$key]['end_city']      = $getting_there[0]->end_city;

                $rate = DB::select("
                    SELECT LEAST(adult_currency_winter, adult_currency_spring, adult_currency_summer, adult_currency_autumn) AS adult_currency 
                    FROM package_rate
                    WHERE package_id = $package->package_id
                    AND no_of_person = 1
                ");
                $data['package'][$key]['adult_currency'] = $rate[0]->adult_currency;

                $day = DB::select("
                    SELECT destination FROM package_day WHERE package_id = $package->package_id
                ");

                $data['package'][$key]['destination'] = [];
                foreach ($day as $row) {

                    $data['package'][$key]['destination'][] = $row->destination;
                }

                $level = DB::select("
                    SELECT level_title FROM package_level WHERE package_id = $package->package_id
                ");

                $data['package'][$key]['level'] = [];
                foreach ($level as $row) {

                    $data['package'][$key]['level'][] = $row->level_title;
                }
            }
        }

        return $data;
    }

    public static function addOperator($data) {
        /**
         * Add new operator
         */

        DB::table('user')->insert($data);
    }
}
