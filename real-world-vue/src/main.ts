// main.ts;
import { createApp } from "vue";
import VueCesium from "vue-cesium";
import "vue-cesium/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(VueCesium);
app.mount("#app");
