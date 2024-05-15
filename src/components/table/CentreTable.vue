<script setup>
import { ref } from "vue"

defineProps({
    Libelle: String,
    Country: String,
    Type: String,
    Email: String,
    Phone: String,
    byDefault: String,
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
                    <th scope="col">{{ Libelle }}</th>
                    <th scope="col">{{ Country }}</th>
                    <th scope="col">{{ Type }}</th>
                    <th scope="col">{{ Email }}</th>
                    <th scope="col">{{ Phone }}</th>
                    <th scope="col">{{ byDefault }}</th>
                    <th style="width: 80px; min-width: 80px;">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <span>Embassade de france</span>
                    </th>
                    <td class="text-danger">
                        France
                    </td>
                    <td>RENDEZ-VOUS</td>
                    <td>rendez@gmail.com</td>
                    <td>
                        <div class="d-flex gap-2">
                            <td>34657654</td>
                        </div>
                    </td>
                    <td> Non</td>
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
                        <span>Embassade de france</span>
                    </th>
                    <td class="text-danger">
                        France
                    </td>
                    <td>RENDEZ-VOUS</td>
                    <td>rendez@gmail.com</td>
                    <td>
                        <div class="d-flex gap-2">
                            <td>34657654</td>
                        </div>
                    </td>
                    <td> Non</td>
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
                        <span>Embassade de france</span>
                    </th>
                    <td class="text-danger">
                        France
                    </td>
                    <td>RENDEZ-VOUS</td>
                    <td>rendez@gmail.com</td>
                    <td>
                        <div class="d-flex gap-2">
                            <td>34657654</td>
                        </div>
                    </td>
                    <td> Non</td>
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