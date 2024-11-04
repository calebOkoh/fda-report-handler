<template>
  <NavigationBar />
  <body>
    <p>Scanner</p>
    <hr />
    <!--QR codes-->
    <div class="singleQRDIV">
      <p>Home</p>
      <vue-qrcode
        value="https://main.d1cgsy1146u96x.amplifyapp.com/"
        :options="{ width: 200 }"
      ></vue-qrcode>
    </div>
    <!--QR codes End-->
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  height: 100%;
}
</style>
