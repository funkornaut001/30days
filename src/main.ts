import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/tailwind.css";
import apolloProvider from "./apolloProvider";

createApp(App).use(store).use(router).use(apolloProvider).mount("#app");
