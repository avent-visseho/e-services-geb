<script setup>
import { ref } from "vue"

defineProps({
    Num: String,
    Code: String,
    Requestor: String,
    TypeOfRequest: String,
    Statut: String,
    RegisterBy: String,
})
</script>

<template>
    <!-- end card header -->

    <div class="table-responsive mb-4">
        <table class="table align-middle datatable dt-responsive table-check nowrap"
            style="border-collapse: collapse; border-spacing: 0 8px; width: 100%;">
            <thead>
                <tr>
                    <!--
                    <th scope="col" style="width: 50px;">
                        <div class="form-check font-size-16">
                            <input type="checkbox" class="form-check-input" id="checkAll">
                            <label class="form-check-label" for="checkAll"></label>
                        </div>
                    </th>
                    -->
                    <th scope="col">{{ Num }}</th>
                    <th scope="col">{{ Code }}</th>
                    <th scope="col">{{ Requestor }}</th>
                    <th scope="col">{{ TypeOfRequest }}</th>
                    <th scope="col">{{ Statut }}</th>
                    <th scope="col">{{ RegisterBy }}</th>
                    <th style="width: 80px; min-width: 80px;">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <span>1</span>
                    </th>
                    <td class="text-danger">
                        2024323153943
                    </td>
                    <td>Phyllis Gatlin</td>
                    <td>e-visa-30 jours-Entrée unique</td>
                    <td>
                        <div class="d-flex gap-2">
                            <a href="#" class="badge badge-soft-primary">SAISIE</a>
                        </div>
                    </td>
                    <td>Phyllis Gatlin</td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bx bx-dots-horizontal-rounded"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <span>1</span>
                    </th>
                    <td class="text-danger">
                        2024323153943
                    </td>
                    <td>Phyllis Gatlin</td>
                    <td>e-visa-30 jours-Entrée unique</td>
                    <td>
                        <div class="d-flex gap-2">
                            <a href="#" class="badge badge-soft-primary">SAISIE</a>
                        </div>
                    </td>
                    <td>Phyllis Gatlin</td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bx bx-dots-horizontal-rounded"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <span>1</span>
                    </th>
                    <td class="text-danger">
                        2024323153943
                    </td>
                    <td>Phyllis Gatlin</td>
                    <td>e-visa-30 jours-Entrée unique</td>
                    <td>
                        <div class="d-flex gap-2">
                            <a href="#" class="badge badge-soft-primary">SAISIE</a>
                        </div>
                    </td>
                    <td>Phyllis Gatlin</td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bx bx-dots-horizontal-rounded"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- end table -->
    </div>
    <!-- end table responsive -->
    <!-- end card body -->
</template>