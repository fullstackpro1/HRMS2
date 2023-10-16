<template>
    <AdminLayout>
        <section class="grid grid-cols-7">
            <div class="col-span-5 py-2 px-10">
                <div class="mt-12">

                    <div class="border rounded-lg py-7 px-8">
                        <div class="flex justify-between">
                            <p class="font-semibold text-xl text-neutral-800">Attendance Status</p>
                            <div class="flex items-center">
                                <p class="text-sm">Status:</p>
                                <div class="w-28 ml-3">
                                    <DropDown :options="attendanceStatus" :message="`Select Option`" v-model="selectedAttendance" />
                                </div>
                                <button class="ml-3 btn-primary-light flex items-center">
                                    <span>
                                        <ArrowDownTrayIcon class="w-4 h-4"/>
                                    </span>
                                    <span class="pl-2">
                                        Download
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div class=" overflow-x-auto sm:rounded-lg pt-5">
                            <table class="w-full text-sm text-left text-neutral-500 ">
                                <thead class="text-xs text-neutral-400 uppercase bg-neutral-100 ">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Employer ID
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Employee Name
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Start
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            End
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Hours Worked
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index" class="bg-white border-b">
                                        <td scope="row" class="px-6 py-4 font-medium text-neutral-700 whitespace-nowrap">
                                            #RED4516
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="flex items-center">
                                                <div>
                                                    <span class="w-10 h-10 border rounded inline-block">
                                                        <img class="w-full h-full object-cover rounded" src="@/assets/user.png" alt=""/>
                                                    </span>
                                                    <!-- <span class="w-10 h-10 border rounded inline-block">
                                                        KP
                                                    </span> -->
                                                </div>
                                                <div class="pl-3">
                                                    <p class=" text-neutral-800 font-medium">Kuntal Patra</p>
                                                    <p class="text-xs">Sr. Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4">
                                            09:21:00
                                        </td>
                                        <td class="px-6 py-4">
                                            06:21:00
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="flex items-center" :class="['text-emerald-500']">
                                                <span>
                                                    <ChevronDownIcon class="w-3 h-3"/>
                                                </span>
                                                <span class="pl-1"> 
                                                    09:00:00
                                                </span>
                                            </div>
                                            
                                        </td>
                                        <td class="px-6 py-4">
                                            <span class="border rounded-3xl px-3 py-1.5 text-xs inline-block border-orange-200 bg-orange-50 text-orange-600">Automated</span>
                                            <!-- <span>Manual</span> -->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="pt-4 text-right">
                            <button class=" btn-primary-light flex items-center">
                                <span class="pr-2">
                                    Show More
                                </span>
                                <span>
                                    <ChevronRightIcon class="w-3 h-3"/>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <RightSideBar/>
        </section>
    </AdminLayout>
</template>
<script>
    import AdminLayout from '../AdminDashboard/AdminLayout.vue';
    import moment from 'moment';
    import DropDown from '../../components/DropDown.vue';
    import RightSideBar from '../../components/RightSideBar.vue';
    import {ChevronDownIcon, ChevronRightIcon, ArrowDownTrayIcon} from '@heroicons/vue/24/solid';
    import axios from "axios";
    //import { BASE_URL } from "../config";
    import { createLocal } from 'the-storages';

    const mirror = createLocal();
    const storage = mirror._prx;

    export default {
        name: 'StateList',
        components:{
            AdminLayout,
            DropDown,
            ChevronDownIcon,
            ArrowDownTrayIcon,
            ChevronRightIcon,
            RightSideBar
        },
        data() {
            return {
                storage:storage,
                toDayDate: new Date(),
                selectedDate: new Date(),
                companyName:''
            }
        },
        created(){
            console.log("COMPANY DETAILS: ",this.storage.companyDetails);
            this.companyName = this.storage.companyDetails.fname;
        },
        computed:{
            formattedDate(){
                const dateObject = new Date();
                return moment(dateObject).format('LLLL'); 
            },
        },
        mounted() {
            // Make a GET request to the ipify API to retrieve the client's public IP address
            axios.get('https://api.ipify.org?format=json')
            .then(response => {
                //this.ipAddress = response.data.ip;
                //console.log("IP:",this.ipAddress);
                this.storage.set("ipAddress", response.data.ip);
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });
        },
        

    }


</script>