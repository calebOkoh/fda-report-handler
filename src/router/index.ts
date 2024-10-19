import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ComplaintView from "@/views/ComplaintView.vue";
import QRScan from "@/components/QR-Scan.vue";
import ManiReport from "@/components/ManiReport.vue";

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
    path: "/report",
    name: "report",
    component: ManiReport,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: (to) => {
      // Function to determine where to redirect
      const redirectTo = calculateRedirectPath(to);
      return redirectTo;
    },
  },
];

function calculateRedirectPath(to: any): string {
  if (to.fullPath.includes("=")) {
    //send all data containig ish home
    const url = to.fullPath();
    const manifacturer = url.searchParams.get("Manifacturer") || "";
    const drugName = url.searchParams.get("DrugName") || "";
    const date = url.searchParams.get("Date") || "";
    const lotNumber = url.searchParams.get("LotNumber") || "";

    localStorage.removeItem("manifacture");
    localStorage.setItem("manifacture", manifacturer);

    localStorage.removeItem("drugName");
    localStorage.setItem("drugName", drugName);

    localStorage.removeItem("date");
    localStorage.setItem("date", date);

    localStorage.removeItem("lotNumber");
    localStorage.setItem("lotNumber", lotNumber);

    return "/";
  }
  // just messing about with redirects here
  return "/about";
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
