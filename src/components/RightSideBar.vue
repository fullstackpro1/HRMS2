<template>
    <div class="col-span-2 bg-neutral-50/50 border-l py-5 px-8">
        <div>
            <div class="flex justify-between">
                <p class="font-medium text-lg text-neutral-800">Progress</p>
                
                <button class="inline-flex rounded border border-blue-100 bg-blue-50 p-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none transition-all w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div class="pt-2">
                <div class="bg-white border px-4 py-3 mt-3 rounded">
                    <div class="">
                        <div class="flex justify-between items-center">
                            <p class="text-base text-neutral-700">General Settings</p>
                            <p class="text-sm text-blue-400 font-medium">80%</p>
                        </div>
                    </div>
                    <div class="bg-neutral-100 rounded h-1 relative mt-3">
                        <div class="w-[85%] h-1 bg-blue-400 rounded"></div>
                    </div>
                    <div class="pt-1.5">
                        <p class="text-xs text-neutral-400">20% of required general settings</p>
                    </div>
                </div>

                <div class="bg-white border px-4 py-3 mt-3 rounded">
                    <div class="">
                        <div class="flex justify-between items-center">
                            <p class="text-base text-neutral-700">Attendance Settings</p>
                            <p class="text-sm text-blue-400 font-medium">50%</p>
                        </div>
                    </div>
                    <div class="bg-neutral-100 rounded h-1 relative mt-3">
                        <div class="w-[50%] h-1 bg-blue-400 rounded"></div>
                    </div>
                    <div class="pt-1.5">
                        <p class="text-xs text-neutral-400">50% of required general settings</p>
                    </div>
                </div>

                <div class="bg-white border px-4 py-3 mt-3 rounded">
                    <div class="">
                        <div class="flex justify-between items-center">
                            <p class="text-base text-neutral-700">User Creation Settings</p>
                            <p class="text-sm text-blue-400 font-medium">20%</p>
                        </div>
                    </div>
                    <div class="bg-neutral-100 rounded h-1 relative mt-3">
                        <div class="w-[20%] h-1 bg-blue-400 rounded"></div>
                    </div>
                    <div class="pt-1.5">
                        <p class="text-xs text-neutral-400">80% of required general settings</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-10">
            <div class="flex justify-between">
                <p class="font-medium text-lg text-neutral-800">Today’s Shifts</p>
                
                <button class="inline-flex rounded border border-blue-100 bg-blue-50 p-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none transition-all w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div class="pt-2">
                <div class="bg-white border px-4 pt-3 pb-4 mt-3 rounded">
                    <div class="">
                        <div class="flex justify-between items-center">
                            <p class="text-base text-neutral-800">Morning Shift</p>
                            
                            <button class="w-7 h-7 hover:bg-blue-50 text-neutral-500 hover:text-blue-600 rounded-full text-center transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="w-40 flex items-center mt-2">
                        <div class="bg-neutral-100 w-36 rounded h-0.5 w- relative">
                            <div class="w-[85%] h-0.5 bg-blue-400  rounded"></div>
                        </div>
                        <p class="text-xs pl-2 text-blue-400 font-medium">80%</p>
                    </div>
                    
                    <div class="pt-5 grid grid-cols-2">
                        <div>
                            <p class="text-xs text-neutral-400">Time</p>
                            <p class="font-medium text-sm pt-2">09:00 AM - 06:00 PM</p>
                        </div>

                        <div class="flex justify-end">
                            <div class="ml-auto">
                                <p class="text-xs text-neutral-400">Members</p>
                                <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5 pt-2">
                                    <img src="@/assets/user.png" alt="user name" class="w-5 h-5 rounded-full bg-slate-100 ring-2 ring-white" >
                                    <img src="@/assets/user.png" alt="user name" class="w-5 h-5 rounded-full bg-slate-100 ring-2 ring-white" >

                                    <img src="@/assets/user.png" alt="user name" class="w-5 h-5 rounded-full bg-slate-100 ring-2 ring-white" >
                                    <img src="@/assets/user.png" alt="user name" class="w-5 h-5 rounded-full bg-slate-100 ring-2 ring-white" >
                                    <span class="w-5 text-[9px] leading-5 font-medium text-center h-5 rounded-full bg-blue-500 text-white ring-2 ring-white" >
                                        25+
                                    </span>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white border px-4 pt-3 pb-4 mt-3 rounded">
                    <div class="">
                        <div class="flex justify-between items-center">
                            <p class="text-base text-neutral-800">Night Shift</p>
                            
                            <button class="w-7 h-7 hover:bg-blue-50 text-neutral-500 hover:text-blue-600 rounded-full text-center transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="w-40 flex items-center mt-2">
                        <div class="bg-neutral-100 w-36 rounded h-0.5 w- relative">
                            <div class="w-[85%] h-0.5 bg-blue-400  rounded"></div>
                        </div>
                        <p class="text-xs pl-2 text-blue-400 font-medium">80%</p>
                    </div>
                    
                    <div class="pt-5 grid grid-cols-2">
                        <div>
                            <p class="text-xs text-neutral-400">Time</p>
                            <p class="font-medium text-sm pt-2">05:00 AM - 03:00 PM</p>
                        </div>

                        <div class="flex justify-end">
                            <div class="ml-auto">
                                <p class="text-xs text-neutral-400">Members</p>
                                <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5 pt-2">
                                    <img src="@/assets/user.png" alt="user name" class="w-5 h-5 rounded-full bg-slate-100 ring-2 ring-white" >
                                    <img src="@/assets/user.png" alt="user name" class="w-5 h-5 rounded-full bg-slate-100 ring-2 ring-white" >

                                    <img src="@/assets/user.png" alt="user name" class="w-5 h-5 rounded-full bg-slate-100 ring-2 ring-white" >
                                    <img src="@/assets/user.png" alt="user name" class="w-5 h-5 rounded-full bg-slate-100 ring-2 ring-white" >
                                    <span class="w-5 text-[9px] leading-5 font-medium text-center h-5 rounded-full bg-blue-500 text-white ring-2 ring-white" >
                                        25+
                                    </span>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-10">
            <div class="flex justify-between">
                <p class="font-medium text-lg leading-6 text-neutral-800">
                    New Joinee 
                    <span class="w-5 text-[9px] leading-5 font-medium text-center h-5 rounded-full bg-blue-500 text-white ring-2 ring-white inline-block">10</span>
                </p>
                
                <button class="inline-flex rounded border border-blue-100 bg-blue-50 p-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none transition-all w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div class="pt-2">
                <div v-for="(item, index) in [1, 2, 3, 4]" :key="index" class="flex justify-between space-x-3 shadow-lg shadow-transparent hover:bg-white hover:shadow-lg hover:shadow-neutral-100 px-2 py-3 mt-1 rounded">
                    <div class="">
                        <div class="flex  items-center">
                            <div class="h-10">
                                <span class="w-10 h-10 border rounded inline-block">
                                    <img class="w-full h-full object-cover rounded" src="@/assets/user.png" alt=""/>
                                </span>
                                <!-- <span class="w-10 h-10 border rounded inline-block">
                                    KP
                                </span> -->
                            </div>
                            <div class="pl-3 w-28">
                                <p class=" text-neutral-800 font-medium text-sm truncate">Kuntal Patra</p>
                                <p class="text-xs text-neutral-400">Sr. Developer</p>
                            </div>
                        </div>
                    </div>

                    

                    <div class="">
                        <p class="text-xs text-neutral-400">15th Jun, 2023</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-10">
            <TabGroup>
                <TabList class="flex space-x-10 border-b">
                    <Tab
                        v-for="items in EventCategories"
                        as="template"
                        :key="items.id"
                        v-slot="{ selected }"
                    >
                    <button :class="[ 'border-b-2 py-1.5 text-xs font-medium leading-5',
                        'focus:outline-none',
                        selected
                            ? ' border-blue-600 text-blue-500'
                            : 'text-neutral-600 hover:bg-white/[0.12] hover:text-blue-500 border-transparent',
                        ]"
                    >
                        {{ items.name }}
                    </button>
                    </Tab>
                </TabList>

                <TabPanels class="mt-2">
                    <TabPanel v-for="items in EventCategories" :key="items.id">
                        <div>
                            <div v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index" class="flex justify-between items-center space-x-3 shadow-lg shadow-transparent hover:bg-white hover:shadow-lg hover:shadow-neutral-100 px-2 py-3 mt-1 rounded">
                                <div class="">
                                    <div class="flex  items-center">
                                        <div class="h-10">
                                            <span class="w-10 h-10 border rounded inline-block">
                                                <img class="w-full h-full object-cover rounded" src="@/assets/user.png" alt=""/>
                                            </span>
                                            <!-- <span class="w-10 h-10 border rounded inline-block">
                                                KP
                                            </span> -->
                                        </div>
                                        <div class="pl-3 w-28">
                                            <p class=" text-neutral-800 font-medium text-sm truncate">Kuntal Patra</p>
                                            <p class="text-xs text-neutral-400">Sr. Developer</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="">
                                    <p class="text-xs text-emerald-500 font-medium">Today</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>

        </div>
    </div>
</template>
<script>

    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';

    export default {
        name: 'RightSideBar',
        components:{
            TabGroup,
            TabList,
            Tab,
            TabPanels,
            TabPanel
        },
        data() {
            return {
                EventCategories: [
                    {
                        id: 1,
                        name: 'Birthday',
                            data: [
                                {
                                    id: 1,
                                    title: 'Does drinking coffee make you smarter?',
                                    date: '5h ago',
                                    commentCount: 5,
                                    shareCount: 2,
                                },
                                {
                                    id: 2,
                                    title: "So you've bought coffee... now what?",
                                    date: '2h ago',
                                    commentCount: 3,
                                    shareCount: 2,
                                },
                            ]
                    },
                    {
                        id: 1,
                        name: 'Work Anniversary',
                            data: [
                                {
                                    id: 1,
                                    title: 'Does drinking coffee make you smarter?',
                                    date: '5h ago',
                                    commentCount: 5,
                                    shareCount: 2,
                                },
                                {
                                    id: 2,
                                    title: "So you've bought coffee... now what?",
                                    date: '2h ago',
                                    commentCount: 3,
                                    shareCount: 2,
                                },
                            ]
                    },
                    {
                        id: 1,
                        name: 'Holiday',
                            data: [
                                {
                                    id: 1,
                                    title: 'Does drinking coffee make you smarter?',
                                    date: '5h ago',
                                    commentCount: 5,
                                    shareCount: 2,
                                },
                                {
                                    id: 2,
                                    title: "So you've bought coffee... now what?",
                                    date: '2h ago',
                                    commentCount: 3,
                                    shareCount: 2,
                                },
                            ]
                    },
                ],
            }
        },
        created(){
        },
        computed:{
        },
    }
</script>