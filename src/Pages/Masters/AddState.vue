<template>
    <AdminLayout>
        <section class="grid grid-cols-7">
            <div class="col-span-5 py-2 px-10">
                <div class="mt-12">
                    <div class="border rounded-lg py-7 px-8">
                        <div class="flex justify-between">
                            <p class="font-semibold text-xl text-neutral-800">Add State</p>
                        </div>
                        <div class=" overflow-x-auto sm:rounded-lg pt-5">
                            <form v-on:submit.prevent="submitForm" ref="form" name="form">
                                <div class="addNewBox" >
                                    <!-- <p>{{ data }}</p> -->
                                    <div class="addNewSub" >
                                        <!-- <p>{{ item }}</p> -->
                                        <div class="addNewFirst adnright" >
                                        <!-- <div class="addNewFirst adnright" v-if="item.name == 'First Name' && item.status == true"> -->
                                            <label>First Name:</label>
                                            <input class="addNewInput" type="text"  placeholder="First Name">
                                        </div>
                                        <div class="addNewFirst adnright" >
                                            <label>Last Name:</label>
                                            <input class="addNewInput" type="text"  placeholder="Last Name">
                                        </div>
                                        <div class="addNewFirst adnleft" >
                                            <label>Gender:</label>
                                            <select >
                                                <option value="undefined" disabled>-Select One-</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                    </div>
                                   
                                </div>
                            </form>
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
    // import DropDown from '../../components/DropDown.vue';
    import RightSideBar from '../../components/RightSideBar.vue';
    // import { ArrowDownTrayIcon} from '@heroicons/vue/24/solid';
    import axios from "axios";
    //import { BASE_URL } from "../config";


    export default {
        name: 'AddState',
        components:{
            AdminLayout,
            // DropDown,
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
<style>

.addNewBox {
    max-width: 800px;
    padding: 26px 20px;
    background-color: #ffffff;
    margin: auto auto 30px;
    border-radius: 8px;
    /* box-shadow: 0 0 15px 0 #d3d3d399; */
    box-shadow: none;


    /* max-width: 0px;
    padding: 0px;
    background-color: #ffffff;
    margin: 0px;
    border-radius: 0px;
    box-shadow: none; */
}
</style>