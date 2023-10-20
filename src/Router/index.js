import { createRouter, createWebHistory } from "vue-router";
import Login from "../Pages/Auth/Login.vue";
import HomePage from "../Pages/index.vue";
import SignUp from "../Pages/Auth/SignUp.vue";
import Dashboard from "../Pages/AdminDashboard/Dashboard.vue";
import BasicForm from "../Pages/AdminDashboard/BasicForm.vue";
import Addnewemployee from "../Pages/AdminDashboard/Addemployee.vue";
import VerifyEmail from "../Pages/Auth/verifyemail.vue";
import AddEmployeeMaster from "../Pages/AdminDashboard/AddEmployeeMaster.vue";
import EmployeeDashboard from "../Pages/AdminDashboard/EmployeeDashboard.vue";
import CountryList from "../Pages/Masters/CountryList.vue";
import StateList from "../Pages/Masters/StateList.vue";
import AddCountry from "../Pages/Masters/AddCountry.vue";
import AddState from "../Pages/Masters/AddState.vue";
import DepartmentList from "../Pages/Masters/DepartmentList.vue";
import DesignationList from "../Pages/Masters/DesignationList.vue";
import ReportingManagerList from "../Pages/Masters/ReportingManagerList.vue";
import EducationList from "../Pages/Masters/EducationList.vue";

import AttendanceSetting from "../Pages/Settings/AttendanceSetting.vue";
import GeneralSetting from "../Pages/Settings/GeneralSetting.vue";
import OrganizationSetting from "../Pages/Settings/OrganizationSetting.vue";
import LeaveSetting from "../Pages/Settings/LeaveSetting.vue";
import PayrollSetting from "../Pages/Settings/PayrollSetting.vue";
import RoleAllocationSetting from "../Pages/Settings/RoleAllocationSetting.vue";


const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: "/",
    },
    {
        name: "LogIn",
        component: Login,
        path: "/login",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "AdminDashboard",
        component: Dashboard,
        path: "/dashboard/:id",
    },
    {
        name: "BasicForm",
        component: BasicForm,
        path: "/basicform/:id",
    },
    {
        name: "Add-new-employee",
        component: Addnewemployee,
        path: "/addemployee",
    },
    {
        name: "VerifyEmail",
        component: VerifyEmail,
        path: "/verifyYourEmail/:id",
    },
    {
        name: "AddEmployeeMaster",
        component: AddEmployeeMaster,
        path: "/addemployeemaster",
    },
    
    {
        name: "EmployeeDashboard",
        component: EmployeeDashboard,
        path: "/employee-dashboard/:id",
    },
    {
        name: "CountryList",
        component: CountryList,
        path: "/country-list",
    },
    {
        name: "StateList",
        component: StateList,
        path: "/state-list",
    },
    {
        name: "AddCountry",
        component: AddCountry,
        path: "/add-country",
    },
    {
        name: "AddState",
        component: AddState,
        path: "/add-state",
    },
    {
        name: "DepartmentList",
        component: DepartmentList,
        path: "/department-list",
    },
    {
        name: "DesignationList",
        component: DesignationList,
        path: "/designation-list",
    },
    {
        name: "ReportingManagerList",
        component: ReportingManagerList,
        path: "/reporting-manager-list",
    },
    {
        name: "EducationList",
        component: EducationList,
        path: "/education-list",
    },
    {
        name: "AttendanceSetting",
        component: AttendanceSetting,
        path: "/attendance-setting",
    },
    {
        name: "GeneralSetting",
        component: GeneralSetting,
        path: "/general-setting",
    },
    {
        name: "OrganizationSetting",
        component: OrganizationSetting,
        path: "/organization-setting",
    },
    {
        name: "LeaveSetting",
        component: LeaveSetting,
        path: "/leave-setting",
    },
    {
        name: "PayrollSetting",
        component: PayrollSetting,
        path: "/payroll-setting",
    },
    {
        name: "RoleAllocationSetting",
        component: RoleAllocationSetting,
        path: "/role-allocation-setting",
    },


]


const router = createRouter({
    mode: "history",
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active", 
    linkExactActiveClass: "active", 
  });
  
  export default router;