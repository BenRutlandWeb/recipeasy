import "@/app.css";
import { registerSW } from "virtual:pwa-register";
import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";

const app = createApp(App);

app.use(router);

app.mount("#app");

if (import.meta.env.PROD) {
  registerSW();
}
