import { createRouter, createWebHistory } from "vue-router";

import { ref } from "vue";
import { toast } from "vue3-toastify";
const storedUserRole = ref(null);
const $toast = ref("");
const error = ref("");

import HomeView from "../views/pages/HomeView.vue";
import TheLayout from "@/views/TheLayout.vue";
import NewRequestView from "../views/pages/NewRequestView.vue";
import AdministrationView from "../views/pages/AdministrationView.vue";
import CentreView from "../views/pages/CentreView.vue";
import LoginView from "../views/pages/auth/LoginView.vue";
import RegisterView from "../views/pages/auth/RegisterView.vue";
import CreateUserView from "../views/pages/administration/CreateUserView.vue";
import CreateProduitsView from "../views/pages/produits/CreateProduitsView.vue";
import ParamProduitView from "../views/pages/produits/ParamProduitView.vue";
import BureauEtatCivilView from "../views/pages/BureauEtatCivilView.vue";
import OfficierEtatCivilView from "../views/pages/OfficierEtatCivilView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: TheLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/new-request/certificat",
          name: "new-request",
          component: NewRequestView,
          meta: {
            requiredRole: (userRole) => {
              return userRole.split(",").includes("ADMIN")
            },
          },
        },
        {
          path: "/administration",
          name: "administration",
          component: AdministrationView,
        },
        {
          path: "/create-user",
          name: "create-user",
          component: CreateUserView,
          meta: {
            requiredRole: (userRole) => {
              return userRole.split(",").includes("ADMIN")
              // Vérifier si le rôle utilisateur est dans le tableau autorisé
            },
          },
        },
        {
          path: "/centre",
          name: "centre",
          component: CentreView,
        },
        {
          path: "/create-produits",
          name: "create-produits",
          component: CreateProduitsView,
          meta: {
            requiredRole: (userRole) => {
              return userRole.split(",").includes("ADMIN")
            },
          },
        },
        {
          path: "/param-produits",
          name: "param-produits",
          component: ParamProduitView,
          meta: {
            requiredRole: (userRole) => {
              return userRole.split(",").includes("ADMIN")
            },
          },
        },
        {
          path: "/bureau-etat-civil",
          name: "bureau-etat-civil",
          component: BureauEtatCivilView,
          meta: {
            requiredRole: (userRole) => {
              return userRole.split(",").includes("ADMIN")
            },
          },
        },
        {
          path: "/officier-etat-civil",
          name: "officier-etat-civil",
          component: OfficierEtatCivilView,
          meta: {
            requiredRole: (userRole) => {
              return userRole.split(",").includes("ADMIN")
            },
          },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  const userRole = localStorage.getItem("userRole"); // Convert to actual user role

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); // Rediriger vers la page de connexion
  } else if (to.meta.requiredRole && !to.meta.requiredRole(userRole)) {
    /* @
      =================================================
        |Rediriger vers une page non autorisée         |
      =================================================
     @  */
    next("/");
    const message = "Vous n'êtes pas autorisé !!";
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else {
    next(); // Autoriser la navigation
  }
});

export default router;
