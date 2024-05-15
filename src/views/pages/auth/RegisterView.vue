<script setup>
import { ref } from "vue";
import ClientHttp from "../../../libs/ClientHttp";
import { toast } from 'vue3-toastify';
const $toast = ref("");

const error = ref("")

const credentials = ref({
    username: "",
    email: "",
    password: ""
})

const register = async function register() {
    try {
        if (
            credentials.value.username.trim() === "" &&
            credentials.value.email.trim() === "" &&
            credentials.value.password.trim() === "" 

        ){
            const message = 'Tous les champs sont requis'
            toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        })

        }

        const user = await ClientHttp.post('auth/register', {
            username: credentials.value.username,
            email: credentials.value.email,
            password: credentials.value.password,
        });

        console.log(user);

        if (user.data && user.data.token) {
            localStorage.setItem('token', user.data.token)
            const message = 'Connexion réussie!'
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            setTimeout(() => {
                router.push('/layout')
            }, 3000);
        }
    } catch (e) {
        console.error(error);
        const message = 'Echec!'
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}
</script>

<template>
    <!-- <body data-layout="horizontal"> -->
    <div class="auth-page">
        <div class="container-fluid p-0">
            <div class="row g-0 vh-100 d-flex align-items-center justify-content-center">
                <div class="col col-lg-4 mt-4">
                    <div class="auth-full-page-content p-sm-5 p-4">
                        <div class="w-100">
                            <div class="d-flex flex-column h-100">
                                <div class="auth-content my-auto">
                                    <div class="text-center">
                                        <h5 class="mb-0">GEBCARDII </h5>
                                        <p class="text-muted mt-2">Sign in to continue to Minia.</p>
                                    </div>
                                    <form class="mt-4 pt-2" @submit.prevent="register">
                                        <div class="mb-3">
                                            <label class="form-label">Username</label>
                                            <input type="text" class="form-control" id="username"
                                                placeholder="Enter username" v-model="credentials.username">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">email</label>
                                            <input type="text" class="form-control" id="email" placeholder="Enter email"
                                                v-model="credentials.email">
                                        </div>
                                        <div class="mb-3">
                                            <div class="d-flex align-items-start">
                                                <div class="flex-grow-1">
                                                    <label class="form-label">Password</label>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="">
                                                        <a href="auth-recoverpw.html" class="text-muted">Forgot
                                                            password?</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="input-group auth-pass-inputgroup">
                                                <input type="password" class="form-control" placeholder="Enter password"
                                                    aria-label="Password" aria-describedby="password-addon"
                                                    v-model="credentials.password">
                                                <button class="btn btn-light shadow-none ms-0" type="button"
                                                    id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="remember-check">
                                                    <label class="form-check-label" for="remember-check">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="mb-3">
                                            <button class="btn btn-success w-100 waves-effect waves-light"
                                                type="submit">Log In</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="mt-4 mt-md-5 text-center">
                                    <p class="mb-0">©
                                        GEBCARDII . Crafted with
                                        <i class="mdi mdi-heart text-danger"></i> by GEB AFRIQUE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end auth full page content -->
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container fluid -->
    </div>
</template>