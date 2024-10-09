import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import ComplaintView from "@/views/ComplaintView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "howme",
    component: ComplaintView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
