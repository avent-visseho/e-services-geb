<script setup>
import {ref} from "vue"
// in <script setup>
defineProps({
    status: String,
    states: String,
    counterValue: Number
})
</script>

<template>
    <div class="col-xl-3 col-md-6">
        <!-- card -->
        <div class="card card-h-100">
            <!-- card body -->
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-6">
                        <span class="text-muted mb-1 lh-1 d-block text-truncate">{{ status }}</span>
                        <span class="text-muted mb-1 lh-1 d-block text-truncate">{{ states }}</span>
                        <h4 class="mb-3">
                            <span class="counter-value" data-target="865.2">{{ counterValue }}</span>
                        </h4>
                    </div>
                </div>

                <div class="text-left">
                    <button class="btn btn-success waves-effect waves-light" type="submit">Voir plus</button>
                </div>

            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->
</template>