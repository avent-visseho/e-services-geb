<template>
    <a href="#!" class="text-reset notification-item">
        <div class="d-flex">
            <img v-if="withImage" :src="src" class="me-3 rounded-circle avatar-sm" alt="user-pic">
            <div v-else class="avatar-sm me-3">
                <span :class="'avatar-title rounded-circle font-size-16'+color">
                    <i :class="'bx bx-'+icon"></i>
                </span>
            </div>
            <div class="flex-grow-1">
                <h6 class="mb-1">{{_title}}</h6>
                <div class="font-size-13 text-muted">
                    <p class="mb-1"> {{ description }}</p>
                    <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>{{ timeAgo }}</span>
                    </p>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name: "NotificationItem",
        props: {
            _title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            timeAgo: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                default: "bell",
            },
            color: {
                type: String,
                default: "bg-primary"
            },
            withImage: {
                type: Boolean,
                default: false
            },
            src: {
                type: String,
                // required: (props) => props.withImage ? true : false
            }
        }
    }
</script>