import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ComplaintView from "@/views/ComplaintView.vue";
import QRScan from "@/components/QR-Scan.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "complaint",
    component: ComplaintView,
  },
  {
    path: "/qr",
    name: "qr",
    component: QRScan,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
