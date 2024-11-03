<template>
  <NavigationBar />
  <body>
    <p>Scanner</p>
    <hr />
    <!--QR codes-->
    <div class="singleQRDIV">
      <p>Hello</p>
      <vue-qrcode value="Hello, World!" :options="{ width: 200 }"></vue-qrcode>
    </div>
    <div class="singleQRDIV">
      <p>"Manifacturer": "Johnson & Johnson</p>
      <vue-qrcode
        value="http://localhost:8080/?Manifacturer=Johnson+%26+Johnson&DrugName=Paracetamol&Date=2024-07-21&LotNumber=JX78910&Delivery=&Description="
        :options="{ width: 200 }"
      >
      </vue-qrcode>
    </div>
    <div class="singleQRDIV">
      <p>"Manifacturer": "Merck & Co."</p>
      <vue-qrcode
        value="http://localhost:8080/?Manifacturer=Merck+%26+Co.&DrugName=Metformin&Date=2024-09-03&LotNumber=MFT56432&Delivery=&Description="
        :options="{ width: 200 }"
      >
      </vue-qrcode>
    </div>
    <div class="singleQRDIV">
      <p>"Manifacturer": "Novartis"</p>
      <vue-qrcode
        value="http://localhost:8080/?Manifacturer=Novartis&DrugName=Omeprazole&Date=2024-06-11&LotNumber=NP98765&Delivery=&Description="
        :options="{ width: 200 }"
      >
      </vue-qrcode>
    </div>
    <!--QR codes End-->
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./NavigationBar.vue";
export default defineComponent({
  name: "QR-Scanner",
});

//just implement this
//https://www.geeksforgeeks.org/create-a-qr-code-scanner-or-reader-in-html-css-javascript/

//encode the data this way
//https://stackoverflow.com/questions/27577922/how-to-pass-a-json-array-as-a-parameter-in-url

/*
getting data from the json params
data.forEach(item => {
    const params = new URLSearchParams(item).toString();
    const url = `http://localhost:8080/?${params}`;
    console.log(url);
});*/
</script>
<style>
.singleQRDIV {
  display: inline-flex;
  align-items: baseline;
}
</style>
