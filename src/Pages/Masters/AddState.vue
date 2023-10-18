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
                                            <label>Country Name:</label>
                                            <select v-model="countryName">
                                                <option value="undefined" disabled>-Select One-</option>
                                                <option :value="country.code" v-for="country in countryList" :key="country._id" >{{ country.name }}</option>
                                            </select>
                                        </div>
                                        <div class="addNewFirst adnright" >
                                            <label>State Name:</label>
                                            <input class="addNewInput" type="text" v-model="stateName" placeholder="State Name">
                                        </div>
                                        <div class="addNewFirst adnright" >
                                            <label>State Code:</label>
                                            <input class="addNewInput" type="text" v-model="stateCode" placeholder="State Code">
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4 text-right">
                                    <button type="submit" class=" btn-primary-light flex items-center">
                                        <span class="pr-2">
                                            Submit 
                                        </span>
                                    </button>
                                </div>
                            </form>
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


    export default {
        name: 'AddState',
        components:{
            AdminLayout,
            // DropDown,
            RightSideBar
        },
        data() {
            return {
                countryList:[],
                countryName:'',
                stateName:'',
                stateCode:'',
            }
        },
        created(){
            this.getCountryList();
        },
        methods:{
            async getCountryList(){
                await axios.get(BASE_URL + '/country-list')
                .then((response)=>{
                    this.countryList =  response.data.countryList;
                    console.log("COUNTRY LIST:: ",response.data);
                })
            },
            async submitForm() {
                const formData = {
                    "countryName":this.countryName,
                    "StateName":this.StateName,
                    "StateCode":this.StateCode
                };
                await axios.post(BASE_URL + '/add-state',formData)
                .then((response)=>{
                    //this.stateList =  response.data.statelist;
                    console.log("STATE DATA:: ",response.data);
                    window.location.href = "state-list";
                })
            },
        }
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