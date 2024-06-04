<script setup>


</script>

<template>
    <div class="topnav">
        <div class="container-fluid">
            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
                <div class="collapse navbar-collapse" id="topnav-menu-content">
                    <ul class="navbar-nav">

                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle arrow-none" id="topnav-dashboard" role="button"
                                to="/"><vue-feather type="home" class="vue-fether-ico"/>
                                <span data-key="t-dashboards">Dashboard</span></router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components"
                                role="button">
                                <vue-feather type="grid" /><span data-key="t-components">Paramétrages</span>
                                <div class="arrow-down"></div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="topnav-components">
                                <div class="dropdown">
                                    <router-link to="/bureau-etat-civil"
                                        class="dropdown-item dropdown-toggle arrow-none"><span data-key="t-forms">Bureau
                                            Etat Civil</span></router-link>
                                </div>
                                <div class="dropdown">
                                    <router-link to="/officier-etat-civil"
                                        class="dropdown-item dropdown-toggle arrow-none"><span data-key="t-forms">Officier
                                            Etat Civil</span></router-link>
                                </div>
                                <div class="dropdown">
                                    <router-link to="/param-produits"
                                        class="dropdown-item dropdown-toggle arrow-none"><span data-key="t-forms">Paramétrage des produits</span></router-link>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons"
                                        role="button">
                                        <span data-key="t-icons">Signataire</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-icons">
                                        <a href="icons-boxicons.html" class="dropdown-item"
                                            data-key="t-boxicons">Boxicons</a>
                                        <a href="icons-materialdesign.html" class="dropdown-item"
                                            data-key="t-material-design">Material Design</a>
                                        <a href="icons-dripicons.html" class="dropdown-item"
                                            data-key="t-dripicons">Dripicons</a>
                                        <a href="icons-fontawesome.html" class="dropdown-item"
                                            data-key="t-font-awesome">Font Awesome 5</a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map"
                                        role="button">
                                        <span data-key="t-maps">Type de produits</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-form">
                                        <router-link to="/new-request/certificat" class="dropdown-item"
                                            data-key="t-form-elements">CERTIFICAT</router-link>
                                        <router-link to="/new-request/acte" class="dropdown-item"
                                            data-key="t-form-elements">ACTES</router-link>
                                        <router-link to="/new-request/carte" class="dropdown-item"
                                            data-key="t-form-elements">CARTE</router-link>
                                    </div>
                                </div>
                                <router-link to="/create-produits" class="dropdown-item dropdown-toggle arrow-none"
                                    id="topnav-form" role="button">
                                    <span data-key="t-forms">Produits</span>
                                </router-link>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components"
                                role="button">
                                <vue-feather type="box" /><span data-key="t-components">Gestion des demandes</span>
                                <div class="arrow-down"></div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="topnav-components">
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form"
                                        role="button">
                                        <span data-key="t-forms">Choix du document</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-form">
                                        <router-link to="/new-request/certificat" class="dropdown-item"
                                            data-key="t-form-elements">CERTIFICAT</router-link>
                                            <router-link to="/new-request/acte" class="dropdown-item"
                                            data-key="t-form-elements">ACTES</router-link>
                                            <router-link to="/new-request/cartes" class="dropdown-item"
                                            data-key="t-form-elements">CARTES</router-link>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table"
                                        role="button">
                                        <span data-key="t-tables">Progression des demandes</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-table">
                                        <a href="tables-basic.html" class="dropdown-item"
                                            data-key="t-basic-tables">Bootstrap Basic</a>
                                        <a href="tables-datatable.html" class="dropdown-item"
                                            data-key="t-data-tables">Data Tables</a>
                                        <a href="tables-responsive.html" class="dropdown-item"
                                            data-key="t-responsive-table">Responsive</a>
                                        <a href="tables-editable.html" class="dropdown-item"
                                            data-key="t-editable-table">Editable</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button">
                                <vue-feather type="file-text" /><span data-key="t-extra-pages">Gestion des
                                    Utilisateurs</span>
                                <div class="arrow-down"></div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="topnav-more">

                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth"
                                        role="button">
                                        <span data-key="t-authentication">Authentication</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-auth">
                                        <a href="auth-login.html" class="dropdown-item" data-key="t-login">Login</a>
                                        <a href="auth-register.html" class="dropdown-item"
                                            data-key="t-register">Register</a>
                                        <a href="auth-recoverpw.html" class="dropdown-item"
                                            data-key="t-recover-password">Recover Password</a>
                                        <a href="auth-lock-screen.html" class="dropdown-item"
                                            data-key="t-lock-screen">Lock Screen</a>
                                        <a href="auth-logout.html" class="dropdown-item" data-key="t-logout">Log Out</a>
                                        <a href="auth-confirm-mail.html" class="dropdown-item"
                                            data-key="t-confirm-mail">Confirm Mail</a>
                                        <a href="auth-email-verification.html" class="dropdown-item"
                                            data-key="t-email-verification">Email verification</a>
                                        <a href="auth-two-step-verification.html" class="dropdown-item"
                                            data-key="t-two-step-verification">Two step verification</a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility"
                                        role="button">
                                        <span data-key="t-utility">Utility</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-utility">
                                        <a href="pages-starter.html" class="dropdown-item"
                                            data-key="t-starter-page">Starter Page</a>
                                        <a href="pages-maintenance.html" class="dropdown-item"
                                            data-key="t-maintenance">Maintenance</a>
                                        <a href="pages-comingsoon.html" class="dropdown-item"
                                            data-key="t-coming-soon">Coming Soon</a>
                                        <a href="pages-timeline.html" class="dropdown-item"
                                            data-key="t-timeline">Timeline</a>
                                        <a href="pages-faqs.html" class="dropdown-item" data-key="t-faqs">FAQs</a>
                                        <a href="pages-pricing.html" class="dropdown-item"
                                            data-key="t-pricing">Pricing</a>
                                        <a href="pages-404.html" class="dropdown-item" data-key="t-error-404">Error
                                            404</a>
                                        <a href="pages-500.html" class="dropdown-item" data-key="t-error-500">Error
                                            500</a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility"
                                        role="button">
                                        <span data-key="t-utility">Administration</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-utility">
                                        <router-link to="/create-user" class="dropdown-item"
                                            data-key="t-starter-page">Creer Utilisateur</router-link>

                                        <router-link to="/centre" class="dropdown-item"
                                            data-key="t-maintenance">centres</router-link>

                                        <a href="pages-comingsoon.html" class="dropdown-item"
                                            data-key="t-coming-soon">Coming Soon</a>
                                        <a href="pages-timeline.html" class="dropdown-item"
                                            data-key="t-timeline">Timeline</a>
                                        <a href="pages-faqs.html" class="dropdown-item" data-key="t-faqs">FAQs</a>
                                        <a href="pages-pricing.html" class="dropdown-item"
                                            data-key="t-pricing">Pricing</a>
                                        <a href="pages-404.html" class="dropdown-item" data-key="t-error-404">Error
                                            404</a>
                                        <a href="pages-500.html" class="dropdown-item" data-key="t-error-500">Error
                                            500</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="layouts-horizontal.html" role="button">

                                <vue-feather type="layout" /><span data-key="t-horizontal">Vérification</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped>
    
    
</style>