<template>
  <!--eslint-disable-->
  <div>
    <a-modal
      v-model:open="open"
      title="Welcome to the FDA Medication Reports Portal"
      :confirm-loading="confirmLoading"
      :maskClosable="false"
      :closable="false"
    >
      <p>{{ modalText }}</p>
      <template #footer>
        <a-button
          key="complaintForm"
          type="default"
          @click="handleComplaintForm"
          >Make a Report</a-button
        >
        <a-button 
          key="observeStats" 
          type="default" 
          @click="handleOk"
          >Observe Stats</a-button
        >
      </template>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
/* eslint-disable */
import {onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const modalText = ref<string>("Select an Action");
const open = ref<boolean>(true);
const confirmLoading = ref<boolean>(false);

const handleOk = () => {
  modalText.value = "The modal will be closed after two seconds";
  confirmLoading.value = true;
  setTimeout(() => {
    open.value = false;
    confirmLoading.value = false;
  }, 2000);
};

onMounted(() => {
  console.log("testing something");
  if (  sessionStorage.getItem("visited")){
      open.value = false
  }else{
    sessionStorage.setItem("visited", "true")
    open.value = true
  }

});

const handleComplaintForm = () => {
  modalText.value = "Loading Complaint Form ...";
  confirmLoading.value = true;
  setTimeout(() => {
    open.value = false;
    confirmLoading.value = false;
  }, 2000);
  router.push("/")
};
</script>
