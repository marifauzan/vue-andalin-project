<script setup>
import { ref, onMounted, computed, watch } from 'vue';

const countries = ref([
    {
        "countryName": "Malaysia",
        "countryCode": "MYS"
    },
    {
        "countryName": "Singapore",
        "countryCode": "SIN"
    },
    {
        "countryName": "Indonesia",
        "countryCode": "IDN"
    },
    {
        "countryName": "India",
        "countryCode": "NDI"
    }
])
const cities = ref([
    {
        "cityName": "Kuala Lumpur",
        "cityCode": "KLU",
        "countryCode": "MYS"
    },
    {
        "cityName": "Jaipur",
        "cityCode": "JIP",
        "countryCode": "NDI"
    },
    {
        "cityName": "Jakarta",
        "cityCode": "JKT",
        "countryCode": "IDN"
    },
    {
        "cityName": "Penang",
        "cityCode": "PEN",
        "countryCode": "MYS"
    },
    {
        "cityName": "Bandung",
        "cityCode": "BDO",
        "countryCode": "IDN"
    }
])
const citiesFilter = ref([])
const input_nama = ref("")
const input_country = ref("")
const input_city = ref("")
const accounts = ref([])

const countries_asc = computed(() => countries.value.sort((a, b) => {
    return a.countryName.localeCompare(b.countryName)
}))

const cities_asc = computed(() => citiesFilter.value.sort((a, b) => {
    return a.cityName.localeCompare(b.cityName)
}))

watch(input_country, newVal => {
    input_city.value = ''
    cities.value.filter((city) => {
        if (city.countryCode === newVal) {
            citiesFilter.value.push(city)
        }
    })
}, { deep: true })

const addAccount = () => {
    accounts.value.push({
        nama: input_nama.value,
        country: input_country.value,
        city: input_city.value,
    })

    input_nama.value = ''
    input_country.value = ''
    input_city.value = ''
}
</script>

<template>
    <div class="container mx-auto">
        <div class=" flex flex-col ">
            <div class="mt-14 justify-center text-center">
                <h1 class="text-3xl">Ship with Andalin Now!</h1>
                <div class="text-base">Let's Create Your Account Here</div>
            </div>

            <form class="mt-14" @submit.prevent="addAccount">
                <div class="mb-6">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full
                        Name</label>
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your Full Name" v-model="input_nama">
                </div>
                <div class="mb-6">
                    <label for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Country</label>
                    <select id="country" placeholder="Select a Country"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="input_country">
                        <option v-for="country in countries_asc">{{ country.countryCode }}</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label for="cities" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">City</label>
                    <select id="city" placeholder="Select a City"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="input_city">
                        <option v-for="city in cities_asc">{{ city.cityName }}</option>
                    </select>
                </div>
                <input
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit" value="Register Now">
            </form>

            <div class="mt-12" v-for="account in accounts">
                <div class="text-4xl font-bold mb-2">{{ account.nama }}</div>
                <div class="text-2xl">{{ account.country }}</div>
                <div class="text-lg">{{ account.city }}</div>
            </div>
        </div>
    </div>
</template>