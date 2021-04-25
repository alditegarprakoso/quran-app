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
    path: "/quran",
    name: "Quran",
    component: () => import("../views/Quran.vue"),
  },
  {
    path: "/quran/:id",
    name: "QuranDetail",
    component: () => import("../views/QuranDetail.vue"),
  },
  {
    path: "/prayer",
    name: "Prayer",
    component: () => import("../views/PrayerTimes.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
