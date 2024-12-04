import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import Signup from "./components/pages/auth/signup.vue";
import Signin from "./components/pages/auth/signin.vue";
import AdminDashboard from "./components/pages/admin/AdminDashboard.vue";
import AdminPosts from "./components/pages/admin/AdminPosts.vue";
import AdminNavbar from "./layouts/AdminNavbar.vue";
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
  {
    path: "/admin",
    component: AdminNavbar,
    children: [
      {
        path: "",
        name: "AdminDashboard",
        component: AdminDashboard,
      },
      {
        path: "post",
        name: "AdminPosts",
        component: AdminPosts,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
