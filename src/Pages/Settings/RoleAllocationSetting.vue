<template>
    <AdminLayout>
        <section class="grid grid-cols-7">
            <div class="col-span-5 py-2 px-10">
                <div class="mt-12" >
                    <div class="border rounded-lg py-7 px-8">
                        <div class="flex justify-between">
                            <p class="font-semibold text-xl text-neutral-800">Role Allocation Setting</p>
                        </div>
                        <div class=" overflow-x-auto sm:rounded-lg pt-5">
                            <form v-on:submit.prevent="submitForm" ref="form" name="form">
                                <div class="addNewBox1" >
                                    <div class="addNewSub" >
                                        <div class="addNewFirst adnright" >
                                            <label>Education Name:</label>
                                            <input class="addNewInput" type="text" v-model="educationName" placeholder="Education Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4 text-right">
                                    <button type="button" class="ml-auto mr-2 btn-gray-light" @click="this.addEducationDiv = false">
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
    // import axios from "axios";
    // import { BASE_URL } from "../../config";
    import { createLocal } from 'the-storages';

    const mirror = createLocal();
    const storage = mirror._prx;


    export default {
        name: 'RoleAllocationSetting',
        components:{
            AdminLayout,
            // DropDown,
            // ArrowDownTrayIcon,
            RightSideBar
        },
        data() {
            return {
                storage:storage,
                
            }
        },
        created(){
            
        },
        methods:{
           
        }
    }


</script>