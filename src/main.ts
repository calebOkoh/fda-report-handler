import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import { Menu } from "ant-design-vue";

const app = createApp(App);
app.use(router).mount("#app");
if (!VueQrcode.name) {
  VueQrcode.name = "";
}
app.use(Menu);
app.component(VueQrcode.name, VueQrcode);
