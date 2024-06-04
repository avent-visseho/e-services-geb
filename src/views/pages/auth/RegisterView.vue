<script setup>
import { ref } from "vue";
import ClientHttp from "../../../libs/ClientHttp";
import { toast } from "vue3-toastify";
import router from "@/router";
const $toast = ref("");

const error = ref("");

const credentials = ref({
  username: "",
  email: "",
  password: "",
});

const register = async function register() {
  try {
    if (
      credentials.value.username.trim() === "" &&
      credentials.value.email.trim() === "" &&
      credentials.value.password.trim() === ""
    ) {
      const message = "Tous les champs sont requis";
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    const user = await ClientHttp.post("/auth/signup", {
      username: credentials.value.username,
      email: credentials.value.email,
      password: credentials.value.password,
    });

    console.log(user);

    if (user.data && user.data.token) {
      localStorage.setItem("token", user.data.token);
      const message = "Connexion réussie!";
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        router.push("/layout");
      }, 3000);
    }
  } catch (e) {
    console.error(error);
    const message = "Echec!";
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
</script>

<template>
  <!-- <body data-layout="horizontal"> -->
  <div class="auth-page">
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-xxl-3 col-lg-4 col-md-5">
          <div class="auth-full-page-content d-flex p-sm-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="mb-4 mb-md-5 text-center">
                  <a href="index.html" class="d-block auth-logo">
                    <img src="assets/images/logo-sm.svg" alt="" height="28" />
                    <span class="logo-txt">E-services</span>
                  </a>
                </div>
                <div class="auth-content my-auto">
                  <div class="text-center">
                    <h5 class="mb-0">Créer un compte</h5>
                    <p class="text-muted mt-2">
                      Créez votre compte maintenant.
                    </p>
                  </div>
                  <form
                    class="needs-validation mt-4 pt-2"
                    novalidate
                    @submit.prevent="register"
                  >
                    <div class="mb-3">
                      <label for="username" class="form-label"
                        >Nom d'utilisateur</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Veuillez saisir votre nom d'utilisateur"
                        v-model="credentials.username"
                        required
                      />
                      <div class="invalid-feedback">Please Enter Username</div>
                    </div>

                    <div class="mb-3">
                      <label for="useremail" class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="useremail"
                        placeholder="Veuillez saisir votre email"
                        v-model="credentials.email"
                        required
                      />
                      <div class="invalid-feedback">Please Enter Email</div>
                    </div>

                    <div class="mb-3">
                      <label for="userpassword" class="form-label"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="userpassword"
                        placeholder="Veuillez saisir votre mot de passe"
                        v-model="credentials.password"
                        required
                      />
                      <div class="invalid-feedback">Please Enter Password</div>
                    </div>
                    <div class="mb-4">
                      <p class="mb-0">
                        En vous inscrivant, vous acceptez les
                        <a href="#" class="text-success"
                          >conditions d'utilisation
                        </a>
                      </p>
                    </div>
                    <div class="mb-3">
                      <button
                        class="btn btn-success w-100 waves-effect waves-light"
                        type="submit"
                      >
                        S'inscrire
                      </button>
                    </div>
                  </form>

                  <div class="mt-5 text-center">
                    <p class="text-muted mb-0">
                      Vous avez déjà un compte ?

                      <router-link to="/login" class="text-success fw-semibold"
                        >Se connecter</router-link
                      >
                    </p>
                  </div>
                </div>
                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    © E-service 
                    <i class="mdi mdi-heart text-danger"></i> GEB AFRIQUE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- end auth full page content -->
        </div>
        <!-- end col -->
        <div class="col-xxl-9 col-lg-8 col-md-7">
          <div class="auth-bg pt-md-5 p-4 d-flex">
            <div class="bg-overlay bg-success"></div>
            <ul class="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <!-- end bubble effect -->
            <div class="row justify-content-center align-items-center">
              <div class="col-xl-7">
                <div class="p-0 p-sm-4 px-xl-0">
                  <div
                    id="reviewcarouselIndicators"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div
                      class="carousel-indicators carousel-indicators-rounded justify-content-start ms-0 mb-0"
                    >
                      <button
                        type="button"
                        data-bs-target="#reviewcarouselIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#reviewcarouselIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#reviewcarouselIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <!-- end carouselIndicators -->
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="testi-contain text-white">
                          <i
                            class="bx bxs-quote-alt-left text-success display-6"
                          ></i>

                          <h4 class="mt-4 fw-medium lh-base text-white">
                            “I feel confident imposing change on myself. It's a
                            lot more progressing fun than looking back. That's
                            why I ultricies enim at malesuada nibh diam on
                            tortor neaded to throw curve balls.”
                          </h4>
                          <div class="mt-4 pt-3 pb-5">
                            <div class="d-flex align-items-start">
                              <div class="flex-shrink-0">
                                <img
                                  src="assets/images/users/avatar-1.jpg"
                                  class="avatar-md img-fluid rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="flex-grow-1 ms-3 mb-4">
                                <h5 class="font-size-18 text-white">
                                  Richard Drews
                                </h5>
                                <p class="mb-0 text-white-50">Web Designer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <div class="testi-contain text-white">
                          <i
                            class="bx bxs-quote-alt-left text-success display-6"
                          ></i>

                          <h4 class="mt-4 fw-medium lh-base text-white">
                            “Our task must be to free ourselves by widening our
                            circle of compassion to embrace all living creatures
                            and the whole of quis consectetur nunc sit amet
                            semper justo. nature and its beauty.”
                          </h4>
                          <div class="mt-4 pt-3 pb-5">
                            <div class="d-flex align-items-start">
                              <div class="flex-shrink-0">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  class="avatar-md img-fluid rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="flex-grow-1 ms-3 mb-4">
                                <h5 class="font-size-18 text-white">
                                  Rosanna French
                                </h5>
                                <p class="mb-0 text-white-50">Web Developer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <div class="testi-contain text-white">
                          <i
                            class="bx bxs-quote-alt-left text-success display-6"
                          ></i>

                          <h4 class="mt-4 fw-medium lh-base text-white">
                            “I've learned that people will forget what you said,
                            people will forget what you did, but people will
                            never forget how donec in efficitur lectus, nec
                            lobortis metus you made them feel.”
                          </h4>
                          <div class="mt-4 pt-3 pb-5">
                            <div class="d-flex align-items-start">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                class="avatar-md img-fluid rounded-circle"
                                alt="..."
                              />
                              <div class="flex-1 ms-3 mb-4">
                                <h5 class="font-size-18 text-white">
                                  Ilse R. Eaton
                                </h5>
                                <p class="mb-0 text-white-50">Manager</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end carousel-inner -->
                  </div>
                  <!-- end review carousel -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container fluid -->
  </div>
</template>

<style scoped>
.container-fluid {
  max-width: 100% !important;
}
</style>
