<script setup>
import PageTitle from "../../components/layouts/PageTitle.vue";
import Table from "../../components/table/CentreTable.vue";
</script>

<template>
    <div class="container-fluid">
        <PageTitle title="Centres" />

        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Enrégistrement d'un centre</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="formrow-email-input">Libellé</label>
                                        <input type="text" class="form-control" id="formrow-email-input"
                                            placeholder="Libellé">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="formrow-password-input">Pays</label>
                                        <input type="text" class="form-control" id="formrow-password-input"
                                            placeholder="Pays">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="formrow-password-input">Type de centre</label>
                                        <input type="text" class="form-control" id="formrow-password-input"
                                            placeholder="centre">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="formrow-password-input">Email</label>
                                        <input type="email" class="form-control" id="formrow-password-input"
                                            placeholder="Email">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="formrow-password-input">Téléphone</label>
                                        <input type="text" class="form-control" id="formrow-password-input"
                                            placeholder="Téléphone">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="formrow-password-input">Boite postale</label>
                                        <input type="text" class="form-control" id="formrow-password-input"
                                            placeholder="Boite postale">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="formrow-password-input">Signature
                                            autorité</label>
                                        <input type="file" class="form-control" id="formrow-file-input">
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="formrow-customCheck">
                                        <label class="form-check-label" for="formrow-customCheck">Par defaut ?</label>
                                    </div>
                                </div>
                            </div>
                            <div class="text-left mt-4">
                                <button class="btn btn-success waves-effect waves-light"
                                    type="submit">Enrégistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-xl-8">
                <div class="col">
                    <div class="card">
                        <div class="card-header align-items-center d-flex">
                            <h4 class="card-title mb-0 flex-grow-1">Listes des centres</h4>
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


                        <Table Libelle="Libellé" Country="Pays" Type="Type"
                        Email="Email" Phone="Numéro" byDefault="Par defaut" />
                    </div>
                    <!-- end   -->
                </div>
                <!-- end col -->
            </div>
        </div>
    </div>
</template>