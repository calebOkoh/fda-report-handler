<template>
  <body>
    <!--grab var with ref tag ?? -->
    <p>
      Enter Complainint information for
      <b> {{ manifacturer }}'s {{ drugName }} </b>
    </p>

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

      <a-form-item label="Description">
        <a-textarea
          v-model:value="formState.desc"
          title="Describe the Symptoms Experinced"
        />
      </a-form-item>

      <a-form-item label="Manifacturer">
        <a-textarea
          v-model:value="formState.manifacturer"
          title="Manifacturers Name"
        />
      </a-form-item>

      <a-form-item label="Date Used">
        <a-textarea
          v-model:value="formState.dateUsed"
          title="Manifacturers Name"
        />
      </a-form-item>

      <a-form-item label="Lot Number">
        <a-textarea
          v-model:value="formState.lotNumber"
          title="Manifacturers Name"
        />
      </a-form-item>

      <a-form-item label="Phone Number">
        <a-textarea
          v-model:value="formState.phone"
          title="Manifacturers Name"
          :disabled="true"
        />
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

const route = useRoute();
const currentPath = route.path;

console.log(currentPath);

// localStorage.setItem("manifacture", "J and J");

const manifacturer =
  localStorage.getItem("manifacture") || '"null manifacture"';
console.log(manifacturer);

const drugName = localStorage.getItem("drugName") || '"null drug name"';
console.log(drugName);

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
  delivery: boolean;
  type: string[];
  desc: string;
  phone: string;
}
const formState: UnwrapRef<FormState> = reactive({
  selectedDeliveryMode: "",
  name: "",
  manifacturer: "",
  dateUsed: "",
  lotNumber: "",
  delivery: false,
  type: [],
  desc: "",
  phone: "",
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
