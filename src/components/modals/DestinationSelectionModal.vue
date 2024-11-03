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

        <a-input
        v-if="isTextBoxVisible"
        v-model:value="userInput"
        placeholder="XXX1234"
        >         
        </a-input>

        <a-button 
          v-if="isTextBoxVisible"
          key="submitCode" 
          type="default" 
          @click="handleSubmitCode"
          >Submit Code</a-button
        >
      </template>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
/* eslint-disable */
import {onMounted, ref } from "vue";
import { Complaint } from "@/types/DataType";
import { fetchData } from "@/services/dataServices";
import { useRouter } from "vue-router";

const router = useRouter();
const modalText = ref<string>("Select an Action");
const open = ref<boolean>(true);
const confirmLoading = ref<boolean>(false);
const isTextBoxVisible = ref(false);
const userInput = ref('');
const toggleTextBox = () => {
      isTextBoxVisible.value = !isTextBoxVisible.value;
    };



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
  modalText.value = "Enter Unique Code";
  toggleTextBox()
  // confirmLoading.value = true;
  // setTimeout(() => {
  //   open.value = false;
  //   confirmLoading.value = false;
  // }, 2000);
  // router.push("/")
};

const handleSubmitCode = async() => {
  modalText.value = "Loading Complaint Form"
  //check it in the data, if it is there, store the index in storage
  const code = userInput.value
  console.log(userInput.value)
  const codeInData = await findCodeInJson(code)

  if (codeInData !== false){
    sessionStorage.setItem("code", codeInData!!.toString());
    confirmLoading.value = true;
    setTimeout(() => {
      open.value = false;
      confirmLoading.value = false;
    }, 2000);
    router.push("/")

  } else{
    modalText.value = "Invalid Code"
  }
}

const data = ref<Complaint[]>([]);


const findCodeInJson = async (code: string) => {
  try {
    data.value = await fetchData();
    for(let i = 0; i < data.value.length; i++ ){
      console.log(code + " "  + data.value[i].lotNumber);
      if (data.value[i].lotNumber === code.trim())
        return i;
    }
    return false
  } catch (error) {
    console.error("Error loading JSON data in component:", error);
  }
};
</script>
