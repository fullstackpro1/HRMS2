<template>
    <AdminLayout>
        <section class="grid grid-cols-7">
            <div class="col-span-5 py-2 px-10">
                <div class="mt-12">
                    <div class="border rounded-lg py-7 px-8">
                        <div class="flex justify-between">
                            <p class="font-semibold text-xl text-neutral-800">Add Country</p>
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
                                            <input class="addNewInput" type="text" v-model="countryName" placeholder="Country Name">
                                        </div>
                                        <div class="addNewFirst adnright" >
                                            <label>Country Code:</label>
                                            <input class="addNewInput" type="text" v-model="countryCode" placeholder="Country Code">
                                        </div>
                                        <!-- <div class="addNewFirst adnleft" >
                                            <label>Gender:</label>
                                            <select >
                                                <option value="undefined" disabled>-Select One-</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div> -->

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
                            <button type="submit" class=" btn-primary-light flex items-center">
                                <span class="pr-2">
                                    Show More
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
        name: 'AddCountry',
        components:{
            AdminLayout,
            // DropDown,
            RightSideBar
        },
        data() {
            return {
                countryName:'',
                countryCode:''
            }
        },
        created(){
        },
        methods:{
            async submitForm() {
                const formData = {
                    "countryName":this.countryName,
                    "countryCode":this.countryCode
                };
                await axios.post(BASE_URL + '/add-country',formData)
                .then((response)=>{
                    //this.stateList =  response.data.statelist;
                    console.log("COUNTRY DATA:: ",response.data);
                    window.location.href = "country-list";
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