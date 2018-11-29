import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import router from "./gpiRouter";
import GPI from "./plugins/main";

Vue.config.productionTip = false;
Vue.use(GPI);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
