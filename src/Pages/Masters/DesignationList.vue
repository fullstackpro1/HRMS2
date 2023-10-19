<template>
    <AdminLayout>
        <section class="grid grid-cols-7">
            <div class="col-span-5 py-2 px-10">
                <div class="mt-12" v-if="addDesignationDiv">
                    <div class="border rounded-lg py-7 px-8">
                        <div class="flex justify-between">
                            <p class="font-semibold text-xl text-neutral-800">Add Designation</p>
                        </div>
                        <div class=" overflow-x-auto sm:rounded-lg pt-5">
                            <form v-on:submit.prevent="submitForm" ref="form" name="form">
                                <div class="addNewBox1" >
                                    <div class="addNewSub" >
                                        <div class="addNewFirst adnright" >
                                            <label>Department Name:</label>
                                            <select v-model="departmentName" class="form-control" >
                                                <option v-for="department in departmentList" :key="department._id" :value="department._id">
                                                {{ department.name }}</option> 
                                            </select>
                                        </div>
                                        <div class="addNewFirst adnright" >
                                            <label>Designation Name:</label>
                                            <input class="addNewInput" type="text" v-model="designationName" placeholder="Designation Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4 text-right">
                                    <button type="button" class="ml-auto mr-2 btn-gray-light" @click="this.addDesignationDiv = false">
                                        <span class="pr-2">
                                            Cancel 
                                        </span>
                                    </button>
                                    <button type="submit" class=" btn-primary-light flex items-center">
                                        <span class="pr-2">
                                            Submit 
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mt-12">
                    <div class="border rounded-lg py-7 px-8">
                        <div class="flex justify-between">
                            <p class="font-semibold text-xl text-neutral-800">Designation List</p>
                            <div class="flex items-center">
                                <!-- <p class="text-sm">Status:</p> -->
                                <!-- <div class="w-28 ml-3">
                                    <DropDown :options="attendanceStatus" :message="`Select Option`" v-model="selectedAttendance" />
                                </div> -->
                                <!-- <button class="ml-3 btn-primary-light flex items-center">
                                    <span>
                                        <ArrowDownTrayIcon class="w-4 h-4"/>
                                    </span>
                                    <span class="pl-2">
                                        Download
                                    </span>
                                </button> -->
                                <button type="button" v-if="!addDesignationDiv" @click="this.addDesignationDiv = true" class="ml-3 btn-primary-light flex items-center">
                                    <!-- <span>
                                        <ArrowDownTrayIcon class="w-4 h-4"/>
                                    </span> -->
                                    <span class="pl-2">
                                        Add Designation
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class=" overflow-x-auto sm:rounded-lg pt-5">
                            <table class="w-full text-sm text-left text-neutral-500 ">
                                <thead class="text-xs text-neutral-400 uppercase bg-neutral-100 ">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            ID
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Department Name
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Designation Name
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(designation,index) in designationList" :key="designation._id" :class="(designation.editDiv)? 'update':''" class="bg-white border-b">
                                        <td scope="row" class="px-6 py-4 font-medium text-neutral-700 whitespace-nowrap">
                                            #{{ index+1 }}
                                        </td>
                                        <td class="px-6 py-4">
                                            <div v-if="!designation.editDiv" class="flex items-center">{{ designation.department.name }}</div>
                                            <div v-else class="flex items-center">
                                                <select v-model="designation.department._id" class="form-control" >
                                                    <option v-for="department in departmentList" :key="department._id" :value="department._id">
                                                    {{ department.name }}</option> 
                                                </select>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div v-if="!designation.editDiv" class="flex items-center">{{ designation.name }}</div>
                                            <div v-else class="flex items-center">
                                                <input type="text" v-model="designation.name" class="form-control" placeholder="Enter Designation Name"/>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <b  :class="(designation.status=='A')? 'green':'red'">{{ (designation.status=='A')? 'Active':'Inactive'}}</b>
                                        </td>
                                        <td class="px-6 py-4">
                                            <button v-if="!designation.editDiv" type="button" v-on:click="clickToEdit(designation)" class="border mr-2 rounded-3xl px-3 py-1.5 text-xs inline-block border-orange-200 bg-orange-50 text-orange-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button v-if="!designation.editDiv" type="button" @click="deleteDesignation(designation._id)" class="border rounded-3xl px-3 py-1.5 text-xs inline-block border-orange-200 bg-orange-50 text-orange-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                            <button v-if="designation.editDiv" v-on:click="editDesignation(designation._id,designation.name,designation.department._id),clickToEdit(designation)" class="border mr-2 rounded-3xl px-3 py-1.5 text-xs inline-block border-orange-200 bg-orange-50 text-orange-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                </svg>

                                            </button>
                                            <button v-if="designation.editDiv" v-on:click="clickToEdit(designation)" class="border rounded-3xl px-3 py-1.5 text-xs inline-block border-orange-200 bg-orange-50 text-orange-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- <div class="pt-4 text-right">
                            <button class=" btn-primary-light flex items-center">
                                <span class="pr-2">
                                    Show More
                                </span>
                                <span>
                                    <ChevronRightIcon class="w-3 h-3"/>
                                </span>
                            </button>
                        </div> -->
                    </div>
                </div>
            </div>
            <RightSideBar/>
        </section>
    </AdminLayout>
</template>
<script>
    import AdminLayout from '../AdminDashboard/AdminLayout.vue';
    // import DropDown from '../../components/DropDown.vue';
    import RightSideBar from '../../components/RightSideBar.vue';
    // import { ArrowDownTrayIcon} from '@heroicons/vue/24/solid';
    import axios from "axios";
    import { BASE_URL } from "../../config";
    import { createLocal } from 'the-storages';

    const mirror = createLocal();
    const storage = mirror._prx;

    export default {
        name: 'CountryList',
        components:{
            AdminLayout,
            // DropDown,
            // ArrowDownTrayIcon,
            RightSideBar
        },
        data() {
            return {
                storage:storage,
                departmentList:[],
                designationList: [],
                addDesignationDiv:false,
                departmentName:'',
                designationName:'',
            }
        },
        created(){
            this.getDepartmentList();
            this.getDesignationList();
        },
        methods:{
            async getDepartmentList() {
                const formData = {
                    "company_id":this.storage.companyDetails._id
                };
                await axios.post(BASE_URL + '/department-list2',formData)
                .then((response)=>{
                    this.departmentList =  response.data.departmentList;
                    console.log("LEAVE DEPARTMENT LIST:: ",response.data);
                })
            },
            async getDesignationList() {
                const formData = {
                    "company_id":this.storage.companyDetails._id
                };
                await axios.post(BASE_URL + '/designation-list2',formData)
                .then((response)=>{
                    this.designationList =  response.data.designationList;
                    console.log("DESIGNATION LIST:: ",response.data);
                })
            },
            async submitForm() {
                const formData = {
                    "company_id":this.storage.companyDetails._id,
                    "departmentName":this.departmentName,
                    "designationName":this.designationName,
                    "ipAddress": this.storage.ipAddress
                };
                await axios.post(BASE_URL + '/add-designation2',formData)
                .then((response)=>{
                    //this.stateList =  response.data.statelist;
                    console.log("DESIGNATION DATA:: ",response.data);
                    this.addDesignationDiv = false;
                    this.departmentName = '';
                    this.designationName = '';
                    this.getDesignationList();
                })
            },
            clickToEdit(designation){
                //this.editDiv[index] = true;
                designation.editDiv = !designation.editDiv; // Toggle the editable stat
            },
            async editDesignation(id,name,departmentId){
                // if (this.addNewDepartment) {
                    const formData = {
                        "id": id,
                        "designationName": name,
                        "departmentId": departmentId
                    };
                    console.log("data:",formData);
                    await axios.put(BASE_URL + '/edit-designation',formData)
                    .then((response)=>{
                        console.log(response.data);
                        //department.editDiv = false;
                        this.getDesignationList();
                    })
                // } else {
                //     console.log("addNewDepartment: must be value");
                // }
            },
            async deleteDesignation(id){
                if (id) {
                    const formData = {
                        "id": id
                    };
                    console.log("data:",formData);
                    await axios.post(BASE_URL + '/delete-designation',formData)
                    .then((response)=>{
                        //this.departmentList;
                        console.log("DELETE RES",response.data);
                        this.getDesignationList();
                    })
                } else {
                    console.log("addNewDepartment: must be value");
                }
            },
        }
    }


</script>
<style>
    .update.bg-white.border-b{
        /* border: 1px solid black; */
        border-radius: 123px !important;
        background: #eff6ff;
    }
    .green {
        color: aquamarine;
    }
    .red {
        color: rgb(253, 164, 164);
    }
    .addNewBox1 .addNewSub .adnright, .addNewBox1 {
        padding: 0px;
        margin:0px;
    }
    .addNewBox1 .addNewSub .adnright, .addNewBox1 .addNewSub .adnleft {
        flex: 1 0 50%;
    }
    .addNewBox1 .addNewSub textarea, .addNewBox1 .addNewSub select, .addNewBox1 .addNewSub input {
        border: none;
        background-color: #f5f5f5;
        padding: 12px 15px;
        display: block;
        width: 100%;
        font-size: 13px;
        color: #666;
        resize: none;
        font-weight: 500;
        border-radius: 4px;
    }
    .addNewBox1 .addNewSub label {
        font-size: 15px;
        font-weight: 500;
        color: #3c3c3c;
        margin-bottom: 2px;
    }
</style>