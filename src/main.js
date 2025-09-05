import "@/app.css";
import { registerSW } from "virtual:pwa-register";
import { ViteSSG } from "vite-ssg";
import App from "@/App.vue";
import router from "@/router";

export const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  ({ app, router }) => {
    // Any custom setups like adding stores, etc.
    if (!import.meta.env.SSR && import.meta.env.PROD) {
      registerSW();
    }
  }
);
