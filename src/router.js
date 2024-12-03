import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import Signup from "./components/pages/auth/signup.vue";
import Signin from "./components/pages/auth/signin.vue";
import AdminDashboard from "./components/pages/admin/AdminDashboard.vue";
const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Signup",
    component: Signup,
    path: "/signup",
  },
  {
    name: "Signin",
    component: Signin,
    path: "/signin",
  },
  ,
  {
    name: "AdminDashboard",
    component: AdminDashboard,
    path: "/admin",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
