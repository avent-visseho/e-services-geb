<!-- eslint-disable prettier/prettier -->
<template>
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <a href="index.html" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="/src/assets/images/logo-sm.svg" alt="" height="24">
                        </span>
                        <span class="logo-lg">
                            <img src="/src/assets/images/logo-sm.svg" alt="" height="24"> <span
                                class="logo-txt">GEBCARDII</span>
                        </span>
                    </a>

                    <a href="index.html" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="/src/assets/images/logo-sm.svg" alt="" height="24">
                        </span>
                        <span class="logo-lg">
                            <img src="/src/assets/images/logo-sm.svg" alt="" height="24"> <span
                                class="logo-txt">GEBCARDII</span>
                        </span>
                    </a>
                </div>

                <button type="button"
                    class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                    data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                    <i class="fa fa-fw fa-bars"></i>
                </button>

                <!-- App Search-->
                <form class="app-search d-none d-lg-block">
                    <div class="position-relative">
                        <input type="text" class="form-control" placeholder="Recherche...">
                        <button class="btn btn-success" type="button"><i
                                class="bx bx-search-alt align-middle"></i></button>
                    </div>
                </form>
            </div>

            <div class="d-flex">

                <div class="dropdown d-inline-block d-lg-none ms-2">
                    <button type="button" class="btn header-item" id="page-header-search-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <!-- <i data-feather="search" class="icon-lg"></i> -->
                        <vue-feather type="search"></vue-feather>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-search-dropdown">

                        <form class="p-3">
                            <div class="form-group m-0">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search ..."
                                        aria-label="Search Result">

                                    <button class="btn btn-primary" type="submit"><i
                                            class="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="dropdown d-none d-lg-inline-block ms-1">
                    <button type="button" class="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <vue-feather type="grid" class="icon-lg"></vue-feather>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                        <div class="p-2">
                            <div class="row g-0">

                                <DropDownMenuItemIcon _title="GitHub" src="/src/assets/images/brands/github.png" />

                                <DropDownMenuItemIcon _title="Bitbucket"
                                    src="/src/assets/images/brands/bitbucket.png" />

                                <DropDownMenuItemIcon _title="Dribbble" src="/src/assets/images/brands/dribbble.png" />

                            </div>

                            <div class="row g-0">

                                <DropDownMenuItemIcon _title="Dropbox" src="/src/assets/images/brands/dropbox.png" />

                                <DropDownMenuItemIcon _title="Mail Chimp"
                                    src="/src/assets/images/brands/mail_chimp.png" />

                                <DropDownMenuItemIcon _title="Slack" src="/src/assets/images/brands/slack.png" />

                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon position-relative"
                        id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <vue-feather type="bell" class="icon-lg"></vue-feather>
                        <span class="badge bg-danger rounded-pill">5</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-notifications-dropdown">
                        <div class="p-3">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6 class="m-0"> Notifications </h6>
                                </div>
                                <div class="col-auto">
                                    <a href="#!" class="small text-reset text-decoration-underline"> Unread (3)</a>
                                </div>
                            </div>
                        </div>
                        <div data-simplebar style="max-height: 230px;">

                            <NotificationItem _title="James Lemire" description="It will seem like simplified English"
                                timeAgo="1 hour ago" :withImage="true" src="/src/assets/images/users/avatar-3.jpg" />

                            <NotificationItem _title="Your order is placed"
                                description="If several languages coalesce the grammar" timeAgo="3 min ago"
                                icon="cart" />

                            <NotificationItem _title="Default titlte vue"
                                description="If several languages coalesce the grammar" timeAgo="3 min ago" />

                            <NotificationItem _title="Your item is shipped"
                                description="If several languages coalesce the grammar" timeAgo="3 min ago"
                                color="bg-success" icon="badge-check" />

                            <NotificationItem _title="Salena Layfield"
                                description="As a skeptical Cambridge friend of mine occidental." timeAgo="1 hour ago"
                                :withImage="true" src="/src/assets/images/users/avatar-6.jpg" />

                        </div>
                        <div class="p-2 border-top d-grid">
                            <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                                <i class="mdi mdi-arrow-right-circle me-1"></i> <span>View More..</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item bg-soft-light border-start border-end"
                        id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <img class="rounded-circle header-profile-user" src="/src/assets/images/users/avatar-1.jpg"
                            alt="Header Avatar">
                        <span class="d-none d-xl-inline-block ms-1 fw-medium">Shawn L.</span>
                        <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <!-- item-->
                        <a class="dropdown-item" href="apps-contacts-profile.html"><i
                                class="mdi mdi-face-profile font-size-16 align-middle me-1"></i> Profile</a>
                        <a class="dropdown-item" href="auth-lock-screen.html"><i
                                class="mdi mdi-lock font-size-16 align-middle me-1"></i> Lock screen</a>
                        <div class="dropdown-divider"></div>

                        <button class="dropdown-item" @click="logout"><i
                                class="mdi mdi-logout font-size-16 align-middle me-1"></i>Logout</button>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>
<script setup>
import DropDownMenuItem from "./DropdownMenu/DropDownMenuItem.vue";
import DropDownMenuItemIcon from "./DropdownMenu/DropDownMenuItemIcon.vue";
import NotificationItem from "./notification/NotificationItem.vue";

import router from "@/router";
import { toast } from 'vue3-toastify';

const logout = async () => {
    try {
        //revoke the token from local storage
        localStorage.removeItem('token');

        const message = "Successfully loged out!";
        toast.success(message, { position: toast.POSITION.TOP_RIGHT });

        //redirect to the login page
        router.push('/login')
    } catch (error) {
        console.error('Error during logout', error);
        const message = 'Logout failled. Please try again'
        toast.error(message, { position: toast.POSITION.TOP_RIGHT });

    }
}
</script>