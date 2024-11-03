<template>
  <NavigationBar />
  <DestinationSelectionModal />
  <ComplaintForm />
</template>
<script lang="ts">
import ComplaintForm from "@/components/ComplaintForm.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import DestinationSelectionModal from "@/components/modals/DestinationSelectionModal.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComplaintView",
  components: {
    ComplaintForm,
    DestinationSelectionModal,
  },
});
</script>
<style></style>
