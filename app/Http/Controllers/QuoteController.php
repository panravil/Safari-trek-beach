<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quote;

class QuoteController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function addQuote(Request $request) {

        $data = $request->validate([
            // 'adult'         => 'required',
            // 'children'      => 'required',
            'travellers'    => 'required',
            'date'          => 'required',
            'fullname'      => 'required',
            'emailAddress'  => 'required',
            'country'       => 'required',
            'mobileno'      => 'required',
            'message'       => 'required',
            'package_id'    => 'required',
            'user_id'       => 'required'
        ]);

        // dd($request->all());

        $adult             = $request->adult != null ? $request->adult : 0;
        $child             = $request->children != null ? $request->children : 0;
        $date              = $request->date;
        $fullname          = $request->fullname;
        $email             = $request->emailAddress;
        $country           = $request->country;
        $phone             = $request->mobileno;
        $description       = $request->message;
        $zanzibar_days     = $request->zanzibar_days;
        $kilimanjaro_days  = $request->kilimanjaro_days;
        $safari_days       = $request->safari_days;
        $package_id        = $request->package_id;
        $user_id           = $request->user_id;

        $data = [
            'full_name'             => $fullname,
            'email'                 => $email,
            'phone'                 => $phone,
            'description'           => $description,
            'adult'                 => $adult,
            'child'                 => $child,
            'travel_date'           => $date,
            'country'               => $country,
            'zanzibar_activity'     => $zanzibar_days,
            'kilimanjaro_activity'  => $kilimanjaro_days,
            'safari_activity'       => $safari_days,
            'package_id'            => $package_id,
            'user_id'               => $user_id
        ];
        Quote::addQuote($data);
        // session()->flash('success', 'success');

        // return redirect('tourQuote');
    }
}
