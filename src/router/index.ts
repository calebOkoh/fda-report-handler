import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
