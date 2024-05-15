<script setup>
import PageTitle from "../../components/layouts/PageTitle.vue"
import StatisticBox from "../../components/statisticCardBox/StatisticBox.vue";
</script>

<template>
    <div class="container-fluid">
        <PageTitle title="Administration" />

        <div class="row">
            <StatisticBox states="Types de documents" />
            <StatisticBox states="Tarification documents" />
            <StatisticBox states="Documents" />
            <StatisticBox states="Utilisateurs" />
        </div><!-- end row-->
    </div>
</template>