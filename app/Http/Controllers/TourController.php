<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tour;

class TourController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
  }

  public function popularTours() {

    $packages        = Tour::allPackages();
    $popularPackages = array_slice($packages, 0, 6);

    // dd($popularPackages);

    return response()->json(
      [
        'popularTour' => $popularPackages
      ],
      200,
      [],
      JSON_UNESCAPED_UNICODE
    );
  }

  public function filterTours(Request $request) {
    // filter data
    $destination   = ($request->input('destination') != '') ? $request->input('destination') : '';
    $min_price     = ($request->input('min_price') != '') ? $request->input('min_price') : 100;
    $max_price     = ($request->input('max_price') != '') ? $request->input('max_price') : 10000;
    $min_day       = ($request->input('min_day') != '') ? $request->input('min_day') : 1;
    $max_day       = ($request->input('max_day') != '') ? $request->input('max_day') : 30;
    $group         = ($request->input('group') != '') ? $request->input('group') : '';
    $level         = ($request->input('comfort') != '') ? explode("|", $request->input('comfort')) : [];
    $focus         = ($request->input('focus') != '') ? explode("|", $request->input('focus')) : [];

    // data query
    $sql = "SELECT package.package_id, package.image_url, package.no_of_day, package.title as title, package.tour_group, tour_focus.title as tour_focus, package_level.level_title as tour_level, tour_activity.title as tour_destination, package_rate.adult_currency
            FROM package, package_rate, package_level, tour_focus, tour_activity, package_activity
            WHERE package.package_id = package_rate.package_id
            AND package.package_id = package_level.package_id
            AND package.tour_focus_id = tour_focus.tour_focus_id
            AND package.package_id = package_activity.package_id
            AND package_activity.tour_activity_id = tour_activity.tour_activity_id
            AND package.tour_group LIKE '%$group'
            AND tour_activity.title LIKE '%$destination'
            AND package.no_of_day BETWEEN $min_day AND $max_day
            AND package_rate.adult_currency BETWEEN $min_price AND $max_price";

    if (count($level) > 0) { // filter by tour level
      $sql .= " AND package_level.level_title IN(";
      foreach ($level as $key => $val) {
        if ($key + 1 == count($level)) {
          $sql .= " '$val'";
        } else {
          $sql .= " '$val',";
        }
      }
      $sql .= ")";
    }

    if (count($focus) > 0) { // filter by tour focus
      $sql .= " AND tour_focus.title IN(";
      foreach ($focus as $key => $val) {
        if ($key + 1 == count($focus)) {
          $sql .= " '$val'";
        } else {
          $sql .= " '$val',";
        }
      }
      $sql .= ")";
    }

    $data = Tour::filterPackages($sql);

    // pagenation
    $page = isset($_GET['p']) ? $_GET['p'] : 1;

    $limit          = 40;
    $start          = ($page - 1) * $limit;
    $total_tours    = !empty($data)?count($data):0;
    $total_pages    = (int)ceil($total_tours / $limit);

    $previous   = $page - 1;
    $next       = $page + 1;


    $data = !empty($data)?array_slice($data, $start, $limit):[];

    // dd($start + 1);

    return response()->json(
      [
        'tours'           => $data,
        'total_tours'     => $total_tours,
        'tour_show_from'  => $start + 1,
        'tour_show_to'    => $start + count($data),
        'pages'           => $total_pages,
        'page'            => $page,
        'previous'        => $previous,
        'next'            => $next
      ],
      200,
      [],
      JSON_UNESCAPED_UNICODE
    );
  }

  public function tourInnerDetail($id) {

    $package = Tour::packageDetail($id);

    // dd($package);

    return response()->json(
      [
        'package' => $package
      ],
      200,
      [],
      JSON_UNESCAPED_UNICODE
    );
  }

  public function tourLevel() {

    $levels = Tour::tourLevel();

    // dd($levels);

    return response()->json(
      [
        'tourlevels' => $levels
      ],
      200,
      [],
      JSON_UNESCAPED_UNICODE
    );
  }

  public function tourActivity() {

    $activities = Tour::tourActivity();

    // dd($activities);

    return response()->json(
      [
        'tourActivities' => $activities
      ],
      200,
      [],
      JSON_UNESCAPED_UNICODE
    );
  }
}
