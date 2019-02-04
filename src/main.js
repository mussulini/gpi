import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import router from "./starterRouter";
import Gpi from "./plugins/gpi";

Vue.config.productionTip = false;
Vue.use(Gpi);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
