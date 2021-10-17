import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/join",
    name: "Join",
    component: () => import("../views/Join.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../components/Common/LayoutMain.vue"),
    children: [
      {
        path: "",
        name: "List",
        component: () => import("../views/Main.vue"),
      },
    ],
  },
  {
    path: "/write",
    name: "Write",
    component: () => import("../views/Write.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
