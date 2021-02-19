<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Tour extends Model {

	public static function allPackages() {
        /**
         * Fetch all packages that shown in packages list page
         * and popular packages in home page
         */

        $data = [];

        // get all users according to possition ASC
        $users = DB::select("
            SELECT * FROM user WHERE status = 'active' AND published = 1 ORDER BY position ASC
        ");

        // get all packages according to users and package possition ASC
        foreach ($users as $count => $user) {
            $data[$count] = [];

            $data_user['company_name']  = $user->company_name;
            $data_user['tag']           = $user->tag;
            $data_user['operator_logo'] = $user->logo;

            $review = DB::select("
                SELECT COUNT(rate) as count, SUM(rate) as sum FROM review WHERE user_id = $user->user_id AND published = 1
            ");
            foreach ($review as $row) {
                $data_user['num_review'] = $row->count;
                $data_user['sum_review'] = ($row->count > 0) ? $row->sum : 0;
                $data_user['avg_review'] = ($row->count > 0) ? round(($row->sum / $row->count), 1) : 0;
            }

            $packages = DB::select("
                SELECT * FROM package WHERE user_id = $user->user_id AND status = 1 AND published = 1 ORDER BY position ASC
            ");

            foreach ($packages as $package) {

                $getting_there = DB::select("
                    SELECT start_city, end_city FROM package_getting_there WHERE package_id = $package->package_id
                ");
                foreach ($getting_there as $row) {
                    $data_getting_there = (array) $row;
                }

                $rate = DB::select("
                    SELECT adult_currency FROM package_rate WHERE package_id = $package->package_id
                ");
                foreach ($rate as $row) {
                    $data_rate = (array) $row;
                }

                $day = DB::select("
                    SELECT destination FROM package_day WHERE package_id = $package->package_id GROUP BY destination
                ");

                $data_day['destination'] = [];
                foreach ($day as $key => $row) {

                    $data_day['destination'][] = $row->destination;
                }

                $level = DB::select("
                    SELECT level_title FROM package_level WHERE package_id = $package->package_id
                ");

                $data_level['level'] = [];
                foreach ($level as $key => $row) {

                    $data_level['level'][] = $row->level_title;
                }

                $package = (array) $package;
                $data[$count][] = array_merge($package, $data_getting_there, $data_rate, $data_user, $data_day, $data_level);
            }
        }

        // arrange packages according to pages each two after 40 packages
        $large_size = 0;
        for ($i = 0; $i < count($data); $i++) { // get large array size

            if (count($data[$i]) > $large_size) {

                $large_size = count($data[$i]);
            }
        }

        $phase = 0;
        $num_array = 0;
        $packages = [];
        for ($i = 0; $i < $large_size; $i++) { // get two package for each operator

            for ($k = 0; $k < count($data); $k++) {

                if (array_key_exists($phase, $data[$k])) {

                    $packages[$num_array] = array_slice($data[$k], $phase, 2);
                    $num_array++;
                }
            }

            $phase = $phase + 2;
        }

        if (count($packages)) {
            $package_list = [];

            foreach ($packages as $package) { // combine packages

                foreach ($package as $pack) {
                    $package_list[] = $pack;
                }
            }

            // packages reorder down
            for ($i = 1; $i < count($package_list) - 1; $i += 2) {
                $k   = array_slice($package_list, 0, $i, true);
                $k[] = $package_list[$i + 1];
                $k[] = $package_list[$i];
                $k   += array_slice($package_list, ($i + 2), count($package_list), true);
                $package_list = $k;
            }

            return $package_list;
        }
    }

    public static function filterPackages($package_sql) {
        /**
         * Fetch all packages that shown in packages list page
         */

        $data = [];

        // get all users according to possition ASC
        $users = DB::select("
            SELECT * FROM user WHERE status = 'active' AND published = 1 ORDER BY position ASC
        ");

        // get all packages according to users and package possition ASC
        foreach ($users as $count => $user) {
            $data[$count] = [];

            $data_user['company_name']  = $user->company_name;
            $data_user['tag']           = $user->tag;
            $data_user['operator_logo'] = $user->logo;

            $review = DB::select("
                SELECT COUNT(rate) as count, SUM(rate) as sum FROM review WHERE user_id = $user->user_id AND published = 1
            ");
            foreach ($review as $row) {
                $data_user['num_review'] = $row->count;
                $data_user['sum_review'] = ($row->count > 0) ? $row->sum : 0;
                $data_user['avg_review'] = ($row->count > 0) ? round(($row->sum / $row->count), 1) : 0;
            }

            $sql = '';
            $sql = $package_sql . " AND package.user_id = $user->user_id AND package.status = 1 AND package.published = 1 GROUP BY package.package_id ORDER BY package.position ASC";

            $packages = DB::select($sql);

            foreach ($packages as $package) {

                $getting_there = DB::select("
                    SELECT start_city, end_city FROM package_getting_there WHERE package_id = $package->package_id
                ");
                foreach ($getting_there as $row) {
                    $data_getting_there = (array) $row;
                }

                $rate = DB::select("
                    SELECT adult_currency FROM package_rate WHERE package_id = $package->package_id
                ");
                foreach ($rate as $row) {
                    $data_rate = (array) $row;
                }

                $day = DB::select("
                    SELECT destination FROM package_day WHERE package_id = $package->package_id GROUP BY destination
                ");

                $data_day['destination'] = [];
                foreach ($day as $key => $row) {

                    $data_day['destination'][] = $row->destination;
                }

                $level = DB::select("
                    SELECT level_title FROM package_level WHERE package_id = $package->package_id
                ");

                $data_level['level'] = [];
                foreach ($level as $key => $row) {

                    $data_level['level'][] = $row->level_title;
                }

                $package = (array) $package;
                $data[$count][] = array_merge($package, $data_getting_there, $data_rate, $data_user, $data_day, $data_level);
            }
        }

        // arrange packages according to pages each two after 40 packages
        $large_size = 0;
        for ($i = 0; $i < count($data); $i++) { // get large array size

            if (count($data[$i]) > $large_size) {

                $large_size = count($data[$i]);
            }
        }

        $phase = 0;
        $num_array = 0;
        $packages = [];
        for ($i = 0; $i < $large_size; $i++) { // get two package for each operator

            for ($k = 0; $k < count($data); $k++) {

                if (array_key_exists($phase, $data[$k])) {

                    $packages[$num_array] = array_slice($data[$k], $phase, 2);
                    $num_array++;
                }
            }

            $phase = $phase + 2;
        }

        if (count($packages)) {
            $package_list = [];

            foreach ($packages as $package) { // combine packages

                foreach ($package as $pack) {
                    $package_list[] = $pack;
                }
            }

            // packages reorder down
            for ($i = 1; $i < count($package_list) - 1; $i += 2) {
                $k   = array_slice($package_list, 0, $i, true);
                $k[] = $package_list[$i + 1];
                $k[] = $package_list[$i];
                $k   += array_slice($package_list, ($i + 2), count($package_list), true);
                $package_list = $k;
            }

            return $package_list;
        }
    }

    public static function packageDetail($id)
    {
        /**
         * Fetch all details that concern with particullar package ID
         */

        $package = DB::select("
            SELECT p.*, f.title as focus, u.user_id, u.company_name, u.logo, u.no_of_staff
            FROM package p, tour_focus f, user u
            WHERE p.package_id = $id
            AND p.status = 1
            AND p.published = 1
            AND p.tour_focus_id = f.tour_focus_id
            AND p.user_id = u.user_id
        ");

        if (count($package)) {
            $data = [];
            $user_id = $package[0]->user_id;

            foreach ($package as $pac) {
                $data['package_id']      = $pac->package_id;
                $data['no_of_day']       = $pac->no_of_day;
                $data['title']           = $pac->title;
                $data['description']     = $pac->description;
                $data['tour_focus']      = $pac->focus;
                $data['tour_group']      = $pac->tour_group;
                $data['image_url']       = $pac->image_url;
                $data['customizable']    = $pac->customizable;
                $data['no_of_staff']     = $pac->no_of_staff;
                $data['logo']            = $pac->logo;
                $data['company_name']    = $pac->company_name;
                $data['user_id']         = $pac->user_id;
            }

            $activity = DB::select("
                SELECT act.title FROM package_activity pact, tour_activity act
                WHERE pact.package_id = $id
                AND pact.tour_activity_id = act.tour_activity_id
            ");
            foreach ($activity as $ac) {
                $data['activity'][] = $ac->title;
            }

            $country = DB::table('package_country')
                ->select('*')
                ->where('package_id', $id)
                ->get();

            foreach ($country as $co) {
                $data['country'][] = $co->country_name;
            }

            $day = DB::table('package_day')
                ->select('*')
                ->where('package_id', $id)
                ->get();

            foreach ($day as $d) {
                $data['day'][$d->day_no] = (array) $d;
            }

            $day_meal = DB::select("
                SELECT pm.day_no, m.title
                FROM package_day_meal pm, tour_meal m
                WHERE pm.package_id = $id
                AND pm.tour_meal_id = m.tour_meal_id
            ");
            foreach ($day_meal as $meal) {
                $data['day_meal'][$meal->day_no][] = $meal->title;
            }

            $disclaimer = DB::table('package_disclaimer')
                ->select('*')
                ->where('package_id', $id)
                ->get();

            foreach ($disclaimer as $dis) {
                $data['disclaimer'][$dis->tour_note_id] = $dis->title;
            }

            $gallery = DB::table('package_gallery')
                ->select('*')
                ->where('package_id', $id)
                ->get();

            foreach ($gallery as $gal) {
                $data['gallery'][] = $gal->image_url;
            }

            $getting_there = DB::table('package_getting_there')
                ->select('*')
                ->where('package_id', $id)
                ->get();

            foreach ($getting_there as $gt) {
                $data['getting_there']['accommodation_beforeafter'] = $gt->accommodation_beforeafter;
                $data['getting_there']['airport_transfer']          = $gt->airport_transfer;
                $data['getting_there']['start_city']                = $gt->start_city;
                $data['getting_there']['end_city']                  = $gt->end_city;
            }

            $inclusion = DB::select("
                            SELECT tn.title, pi.title as choice
                            FROM package_inclusion pi, tour_note tn
                            WHERE pi.package_id = $id
                            AND pi.tour_note_id = tn.tour_note_id
                        ");

            if (count($inclusion) > 0) {
                $data['inclusion']['included'] = [];
                $data['inclusion']['excluded'] = [];

                foreach ($inclusion as $inc) {
                    $data['inclusion'][$inc->choice][] = $inc->title;
                }
            } else {
                $data['inclusion']['included'] = [];
                $data['inclusion']['excluded'] = [];
            }

            $rate = DB::table('package_rate')
                ->select('*')
                ->where('package_id', $id)
                ->get();

            foreach ($rate as $r) {
                $data['rate']['adult_currency'] = $r->adult_currency;
                $data['rate']['child_currency'] = $r->child_currency;
                $data['rate']['free_currency']  = $r->free_currency;
                $data['rate']['start_date']     = $r->start_date;
                $data['rate']['end_date']       = $r->end_date;
            }

            $transport = DB::select("
                SELECT t.title
                FROM package_transport pt, tour_transport t
                WHERE pt.package_id = $id
                AND pt.tour_transport_id = t.tour_transport_id
            ");
            foreach ($transport as $tra) {
                $data['transport'][] = $tra->title;
            }

            $data['review'] = [];
            $reviews = DB::table('review')
                ->select('review_id', 'full_name', 'email', 'title', 'description', 'rate', 'created_at')
                ->where('user_id', $user_id)
                ->where('published', 1)
                ->get();

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

            return $data;
        }
    }

    public static function tourLevel() {
        /**
         * Fetch all tour levels that shown in tour inner page (filter)
         */

        $levels = DB::select("
            SELECT * FROM tour_level ORDER BY title ASC
        ");

        return $levels;
    }

    public static function tourActivity() {
        /**
         * Fetch all tour activities that shown in tour inner page (filter)
         */

        $activities = DB::select("
            SELECT * FROM tour_activity ORDER BY title ASC
        ");

        return $activities;
    }

    public static function tourFocus() {
        /**
         * Fetch all tour focus that shown in tour inner page (filter)
         */

        $focus = DB::select("
            SELECT * FROM tour_focus ORDER BY title ASC
        ");

        return $focus;
    }
}