import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Signup from "./components/signup.vue";
import Signin from "./components/signin.vue";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
