<template>
  <body>
    <!--grab var with ref tag ?? -->
    <p>Report a Medication Issue to the FDA</p>

    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Ingestion Mode ">
        <a-select
          v-model:value="formState.selectedDeliveryMode"
          label-in-value
          style="width: 405px"
          :options="deliveryModeOptions"
          @change="handleChange"
        ></a-select>
      </a-form-item>

      <a-form-item label="Manifacturer">
        <a-textarea
          v-model:value="formState.manifacturer"
          title="Manifacturers Name"
          :disabled="true"
        />
      </a-form-item>

      <a-form-item label="Medication Name">
        <a-textarea
          v-model:value="formState.name"
          title="Medication  Name"
          :disabled="true"
        />
      </a-form-item>

      <a-form-item label="Use By">
        <a-textarea
          v-model:value="formState.dateUsed"
          title="Use By"
          :disabled="true"
        />
      </a-form-item>

      <a-form-item label="Lot Number">
        <a-textarea
          v-model:value="formState.lotNumber"
          title="Lot Number"
          :disabled="true"
        />
      </a-form-item>

      <a-form-item label="Description">
        <a-textarea
          v-model:value="formState.desc"
          title="Describe the Symptoms Experinced"
        />
      </a-form-item>

      <a-form-item label="Phone Number">
        <a-textarea v-model:value="formState.phone" title="Phone Number" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px">Cancel</a-button>
      </a-form-item>
    </a-form>
  </body>
</template>

<script lang="ts" setup>
import { reactive, toRaw, ref } from "vue";
import type { UnwrapRef } from "vue";
import type { SelectProps } from "ant-design-vue";
import { useRoute } from "vue-router";
import { fetchData } from "@/services/dataServices";
import { Complaint } from "@/types/DataType";
import { onMounted } from "vue";

const route = useRoute();
const currentPath = route.path;

console.log(currentPath);
const data = ref<Complaint[]>([]);

const deliveryModeOptions = ref<SelectProps["options"]>([
  {
    value: "pillORtablet",
    label: "Pill or Tablet",
  },
  {
    value: "syringe",
    label: "Injection - Syringe",
  },
  {
    value: "Syrup",
    label: "Oral Syrup",
  },
  {
    value: "tlg",
    label: "Topical Lotion or Gel",
  },
]);

const handleChange: SelectProps["onChange"] = (value) => {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
};

interface FormState {
  selectedDeliveryMode: any;
  name: string;
  manifacturer: string;
  dateUsed: string;
  lotNumber: string;
  type: string[];
  desc: string;
  phone: string;
}
const formState: UnwrapRef<FormState> = reactive({
  selectedDeliveryMode: ref<string>(""),
  name: sessionStorage.getItem("name") || "",
  manifacturer: ref<string>(sessionStorage.getItem("manifacturer") || ""),
  dateUsed: sessionStorage.getItem("dateUsed") || "",
  lotNumber: ref<string>(sessionStorage.getItem("lotNumber") || ""),
  type: [],
  desc: "",
  phone: "",
});

onMounted(async () => {
  if (sessionStorage.getItem("code")) {
    const code: number = +sessionStorage.getItem("code")!;
    try {
      data.value = await fetchData();
      sessionStorage.setItem("name", data.value[code].name);
      sessionStorage.setItem("manifacturer", data.value[code].manifacturer);
      sessionStorage.setItem("lotNumber", data.value[code].lotNumber);
    } catch (error) {
      console.error("Error loading JSON in component:", error);
    }
  } else {
    console.error("Code error: Hmm somthing is not right here is it now");
  }
});
const onSubmit = () => {
  localStorage.setItem(
    "selectedDeliveryMode",
    formState.selectedDeliveryMode["label"]
  );
  localStorage.setItem("desc", formState.desc);

  console.log("submit!", toRaw(formState));
  console.log(
    `Ingestion Mode: ${localStorage.getItem("selectedDeliveryMode")} 
    Description  ${localStorage.getItem("desc")}`
  );
};

const labelCol = { style: { width: "150px" } };
const wrapperCol = { span: 14 };

// export default defineComponent({
//   name: "ComplaintView",
// });
</script>

<style>
/********PAGE**************/
/********Form**************/

/********Form items******/
.ant-form-item-label > {
  color: red;
}

img {
  width: 200px;
}

.imageDivs {
  display: inline-block;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
</style>
