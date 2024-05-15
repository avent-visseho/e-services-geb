import {
  createRouter,
  createWebHistory
} from "vue-router";
import HomeView from "../views/pages/HomeView.vue";
import TheLayout from "@/views/TheLayout.vue";
import NewRequestView from "../views/pages/NewRequestView.vue";
import AdministrationView from "../views/pages/AdministrationView.vue";
import CentreView from "../views/pages/CentreView.vue";
import LoginView from "../views/pages/auth/LoginView.vue";
import RegisterView from "../views/pages/auth/RegisterView.vue"

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    component: TheLayout,
    meta: { requiresAuth: true },
    children: [{
      path: "/",
      name: "home",
      component: HomeView,
    }, {
      path: "/new-request",
      name: "new-request",
      component: NewRequestView,
    }, {
      path: "/administration",
      name: "administration",
      component: AdministrationView,
    }, {
      path: "/centre",
      name: "centre",
      component: CentreView,
    }]
  }, {
    path: "/login",
    name: "login",
    component: LoginView
  }, {
    path: "/register",
    name: "register",
    component: RegisterView
  }],
});


router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  } else if (to.meta.requiredRole && userRoleValue !== to.meta.requiredRole) {
    next('/john'); // Rediriger vers une page non autorisée si l'utilisateur n'a pas le rôle requis
  } else {
    next(); // Autoriser la navigation
  }
});

export default router;