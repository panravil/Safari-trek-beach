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
}