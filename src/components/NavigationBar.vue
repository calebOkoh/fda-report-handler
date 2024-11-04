<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script lang="ts" setup>
/* eslint-disable */
import { h, ref, watch, onMounted } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  ArrowsAltOutlined,
  HeatMapOutlined,
  BarChartOutlined,
  QrcodeOutlined,
  FormOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";

const current = ref<string[]>([sessionStorage.getItem("selectedMenu") || "form"]);
// Watch for changes in current and save them to localStorage

watch(current, (newValue) => {
  //TODO change newValue to newSelection
  sessionStorage.setItem("selectedMenu", newValue[0]);
});

onMounted(() => {
  const savedMenu = sessionStorage.getItem("selectedMenu");
  if (savedMenu) {
    current.value = [savedMenu];
  }
});

const items = ref<MenuProps["items"]>([
  {
    key: "form",
    icon: () => h(FormOutlined),
    label: h(
      "a",
      { href: "/" },
      "Complaint Form"
    ),
    title: "Complaint Form",
  },
  {
    key: "qr",
    icon: () => h(QrcodeOutlined),
    label: h(
      "a",
      { href: "/qr" },
      "Sample QR Codes"
    ),
    title: "Sample QR Codes",
  },
  {
    key: "report",
    icon: () => h(BarChartOutlined),
    // label: h(
    //   "a",
    //   { href: "/report" },
    //   "Report"
    // ),
    title: "Report",
    label: "Reports",
    children: [
      {
        label: h(
      "a",
      { href: "/report" },
      "Manufacturer Report"
    ),
        key:"Manufacturer Report"
      },
      {
        label: h(
      "a",
      { href: "/observeStats" },
      "Observe Stats"
    ),
        key: "observeStats"
      }
    ]

  },
  {
    key: "about",
    icon: h(QuestionCircleOutlined),
    label: h(
      "a",
      { href: "/about" },
      "About"
    ),
    title: "About",
  },
]);
</script>
