import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);
const auth = true;

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
        meta: { auth },
        component: () => import("../views/Main.vue"),
      },
    ],
  },
  {
    path: "/write",
    name: "Write",
    meta: { auth },
    component: () => import("../views/Write.vue"),
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: () => import("../components/Common/LayoutNav.vue"),
    children: [
      {
        path: "",
        name: "mypage",
        meta: { auth },
        component: () => import("../views/Mypage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth && !store.state.loggedIn) {
    await store.dispatch("getUserInfo");
    if (store.state.loggedIn) {
      next();
    } else {
      router.replace("/");
    }
  } else {
    next();
  }
});

export default router;
