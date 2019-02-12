import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Gpi from "./plugins/main";

Vue.config.productionTip = false;
Vue.use(Gpi);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
