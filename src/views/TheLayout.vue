<template>
    <div id="layout-wrapper">
        <TheHeader />

        <TopNavBar />

        <div class="main-content">

            <div class="page-content">
                <router-view />
            </div>

            <TheFooter />
        </div>

    </div>
</template>
<script setup>
import TheFooter from '../components/layouts/TheFooter.vue';
import TheHeader from '../components/layouts/TheHeader.vue';
import TopNavBar from '../components/topNavbar/TopNavBar.vue';

</script>