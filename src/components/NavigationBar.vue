<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script lang="ts" setup>
/* eslint-disable */
import { h, ref, watch, onMounted } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";

const current = ref<string[]>([localStorage.getItem("selectedMenu") || "form"]);
// Watch for changes in current and save them to localStorage

watch(current, (newValue) => {
  //TODO change newValue to newSelection
  localStorage.setItem("selectedMenu", newValue[0]);
});

onMounted(() => {
  const savedMenu = localStorage.getItem("selectedMenu");
  if (savedMenu) {
    current.value = [savedMenu];
  }
});

const items = ref<MenuProps["items"]>([
  {
    key: "form",
    icon: () => h(MailOutlined),
    label: h(
      "a",
      { href: "/" },
      "Complaint Form"
    ),
    title: "Complaint Form",
  },
  {
    key: "qr",
    icon: () => h(AppstoreOutlined),
    label: h(
      "a",
      { href: "/#qr" },
      "Sample QR Codes"
    ),
    title: "Sample QR Codes",
  },
  {
    key: "report",
    icon: () => h(AppstoreOutlined),
    label: h(
      "a",
      { href: "/#report" },
      "Report"
    ),
    title: "Report ",
  },
  {
    key: "about",
    label: h(
      "a",
      { href: "/#about" },
      "About"
    ),
    title: "About",
  },
]);
</script>
