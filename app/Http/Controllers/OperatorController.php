<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Operator;

class OperatorController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function listOperators() {

        $operators = Operator::allOperators();

        // dd($operators);
        
        return response()->json(
            [
                'operatorList' => $operators
            ],
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function operatorDetail($id) {

        $data = Operator::operatorDetail($id);
        
        // dd($data);

        return response()->json(
            [
                'operator' => $data
            ],
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function addOperator(Request $request) {

        $this->validate($request, [
            'companyName'           => 'required',
            'email'                 => 'required',
            'phone'                 => 'required',
            'stuffs'                => 'required',
            'personalName'          => 'required',
            'password'              => 'required',
            'address'               => 'required',
            'tourType'              => 'required',
            'companyBrief'          => 'required',
            'companyDescription'    => 'required',
            'conditions'            => 'required',
        ]);

        // dd($request->all());

        $company_name  = $request->companyName;
        $email         = $request->email;
        $phone         = $request->phone;
        $stuffs        = $request->stuffs;
        $person_name   = $request->personalName;
        $password      = $request->password;
        $address       = $request->address;
        $tour_type     = $request->tourType;
        $brief         = $request->companyBrief;
        $description   = $request->companyDescription;

        $data = [
            'company_name'  => $company_name,
            'username'      => $email,
            'phone_no'      => $phone,
            'address'       => $address,
            'no_of_staff'   => $stuffs,
            'person_name'   => $person_name,
            'tour_type'     => $tour_type,
            'brief'         => $brief,
            'description'   => $description,
            'password'      => Hash::make($password),
            'position'      => time()
        ];
        Operator::addOperator($data);
        // session()->flash('success', 'success');

        // return redirect('become_a_patner');
    }
}
