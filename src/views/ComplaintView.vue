<template>
  <NavigationBar />
  <ComplaintForm />
</template>
<script lang="ts">
import ComplaintForm from "@/components/ComplaintForm.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComplaintView",
  components: {
    ComplaintForm,
  },
});
</script>
<style></style>
