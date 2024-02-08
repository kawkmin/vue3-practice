import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "./assets/styles/main.scss"; vite에서도 import해서 중복 오류남.

const app = createApp(App);

app.use(router);

app.mount("#app");
