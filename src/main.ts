import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import { Menu } from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import Antd from "ant-design-vue";
import NavigationBar from "./components/NavigationBar.vue";

const app = createApp(App);
app.use(router).mount("#app");
if (!VueQrcode.name) {
  VueQrcode.name = "";
}
// app.use(Antd).mount("#app");
app.component(VueQrcode.name, VueQrcode);
app.use(Menu);
app.component("NavigationBar", NavigationBar);
