<template>
    <AdminLayout>
        <section class="grid grid-cols-7">
            <div class="col-span-5 py-2 px-10">
                <div class="mt-12">
                    <div class="border rounded-lg py-7 px-8">
                        <div class="flex justify-between">
                            <p class="font-semibold text-xl text-neutral-800">Country List</p>
                            <div class="flex items-center">
                                <!-- <p class="text-sm">Status:</p> -->
                                <!-- <div class="w-28 ml-3">
                                    <DropDown :options="attendanceStatus" :message="`Select Option`" v-model="selectedAttendance" />
                                </div> -->
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
                                            ID
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Country Name
                                        </th>
                                        <th scope="col" class="px-6 py-3 font-semibold">
                                            Country Code
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
                                    <tr v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index" class="bg-white border-b">
                                        <td scope="row" class="px-6 py-4 font-medium text-neutral-700 whitespace-nowrap">
                                            #RED4516
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="flex items-center">India</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="flex items-center">IND</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            06:21:00
                                        </td>
                                       
                                        <td class="px-6 py-4">
                                            <span class="border rounded-3xl px-3 py-1.5 text-xs inline-block border-orange-200 bg-orange-50 text-orange-600">Automated</span>
                                            <!-- <span>Manual</span> -->
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
    import { ArrowDownTrayIcon} from '@heroicons/vue/24/solid';
    import axios from "axios";
    //import { BASE_URL } from "../config";


    export default {
        name: 'CountryList',
        components:{
            AdminLayout,
            // DropDown,
            ArrowDownTrayIcon,
            RightSideBar
        },
        data() {
            return {
                toDayDate: new Date(),
                selectedDate: new Date(),
                companyName:''
            }
        },
        created(){
        },
        computed:{
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