import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCesium from 'vue-cesium'
import lang from 'vue-cesium/lang/en-us'
createApp(App)
    .use(store)
    .use(router)
    .use(
        VueCesium,
        {
            cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YjIxMzI3OC03Y2YwLTQwYzUtYjc2Ni1iZjJmNTNiMGFjODEiLCJpZCI6NzY5OTYsImlhdCI6MTYzOTkzNjI4N30.VfoT1Fy8mKHCbotYLd2UPH2mYjCTFWCDN_ilLOlRjU4'
        }
    )
    .mount("#app");
//# sourceMappingURL=main.js.map sd