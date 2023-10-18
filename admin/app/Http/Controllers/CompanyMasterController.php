<?php

namespace App\Http\Controllers;
use App\Models\Designation;
use App\Models\Department;
use App\Models\Country;
use App\Models\CountryState;
use App\Models\AttendanceShift;
use App\Models\AttendanceRoster;
use App\Models\EducationMaster;
use App\Models\ReportingManagerMaster;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Mail;


class CompanyMasterController extends Controller
{

    public function getDepartmentList(){

        $departmentList = Department::where('status', 'A')->get();
        $response = [
            'success'       => 'success',
            // 'message'       => $req->message,
            'departmentList'=> $departmentList
        ];

        return response()->json($response);
    }

    public function getDesignationList(){

        $designationList = Designation::where('status', 'A')->get();
        $response = [
            'success'           => 'success',
            // 'message'           => $req->message,
            'designationList'   => $designationList
        ];

        return response()->json($response);
    }

    public function getCountryList(){

        $countryList = Country::get();
        $response = [
            'success'       => 'success',
            'countryList'=> $countryList
        ];

        return response()->json($response);
    }

    public function addCountryDetails(Request $req){
        //$countryStateList = Country::where('iso2',$req->code)->first();

        $countryName         = $req->countryName;
        $countryCode         = $req->countryCode;

        if($countryName && $countryCode){
            $insert              = new Country;
            $insert->name        = $countryName;
            $insert->code        = $countryCode;
            $insertedData        = $insert->save();
        }

        if($insertedData){
            $success    = 'success';
            $messages   = 'Created successfully';
        } else {
            $success    = 'failed';
            $messages   = 'somthing went wrong';
        }

        $response = [
            'success'       => $success,
            'message'       => $messages
            //'data'       => $req->departmentArray
        ];

        return response()->json($response);
    }

    public function addCountryWiseState(Request $req){

        $countryName         = $req->countryName;
        $countryCode         = $req->countryCode;

        if($countryName){
            $insert              = new Country;
            $insert->name        = $countryName;
            $insert->code        = $countryCode;
            $insertedData        = $insert->save();
        }

        if($insertedData){
            $success    = 'success';
            $messages   = 'Created successfully';
        } else {
            $success    = 'failed';
            $messages   = 'somthing went wrong';
        }

        $response = [
            'success'       => $success,
            'message'       => $messages
            //'data'       => $req->departmentArray
        ];

        return response()->json($response);
    }

    public function getStateList(){

        $statelist = CountryState::get();
        $response = [
            'success'       => 'success',
            'statelist'     => $statelist
        ];

        return response()->json($response);
    }

    public function getCountryStateList(Request $req){

        $countryStateList = CountryState::where('iso2',$req->code)->first();
        $response = [
            'success'       => 'success',
            'countryStateList'=> $countryStateList
        ];

        return response()->json($response);
    }

    public function getCompanyWiseShiftList(Request $req){
        $shiftList = AttendanceShift::where('company_id', $req->companyId)->where('shiftType', 'manual')->where('status', 'A')->get();
        $response = [
            'success'           => 'success',
            'shiftList'         => $shiftList
        ];

        return response()->json($response);
    }

    public function getCompanyWiseRosterList(Request $req){
        $rosterList = AttendanceRoster::where('company_id', $req->companyId)->where('shiftType', 'Manual')->where('status', 'A')->get();
        $response = [
            'success'           => 'success',
            'rosterList'        => $rosterList
        ];

        return response()->json($response);
    }

    public function getReportingManagerMasterList(Request $req){
        $reportingManagerList = ReportingManagerMaster::where('company_id', $req->company_id)->where('status', 'A')->get();
        $response = [
            'success'               => 'success',
            'reportingManagerList'  => $reportingManagerList
        ];

        return response()->json($response);
    }

    public function getEducationMasterList(Request $req){
        $educationList  = EducationMaster::where('company_id', $req->company_id)->where('status', 'A')->get();
        $response       = [
            'success'        => 'success',
            'educationList'  => $educationList
        ];

        return response()->json($response);
    }

    // public function getStateList(Request $req){

    //     $stateList = CountryState::where('iso2',$req->country)->get();
    //     $response = [
    //         'success'       => 'success',
    //         'stateList'=> $stateList
    //     ];

    //     return response()->json($response);
    // }

    //function

}
