<script setup>
import {ref} from "vue";
import PageTitle from "../../components/layouts/PageTitle.vue";
import StatisticBox from "../../components/statisticCardBox/StatisticBox.vue";
import Table from "../../components/table/Table.vue";
</script>


<template>
    <div class="container-fluid">

        <PageTitle title="GESTION DE VISA"/>

        <div class="row">
            <StatisticBox status="Demande en cours" states="Controle" counterValue="2"/>
            <StatisticBox status="Demande en cours" states="Direction" counterValue="0"/>
            <StatisticBox status="Demande en opposition" counterValue="0"/>
            <StatisticBox status="Demandes Rejetée" counterValue="0"/>
        </div><!-- end row-->


        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">Recent Activity</h4>
                        <div class="flex-shrink-0">
                            <!-- App Search-->
                            <form class="app-search d-none d-lg-block">
                                <div class="position-relative">
                                    <input type="text" class="form-control" placeholder="Recherche...">
                                    <button class="btn btn-success" type="button"><i
                                            class="bx bx-search-alt align-middle"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <Table Num="Numéro" Code="Code" Requestor="Demandeur" TypeOfRequest="Type de Demande" Statut="SAISIE" RegisterBy="Enregistrer par"/>
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div><!-- end row -->

    </div> <!-- container-fluid -->
    <!-- End Page-content -->
</template>