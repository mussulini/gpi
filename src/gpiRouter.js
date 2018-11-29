import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/gpi/GpiHeader";
import Footer from "./layout/gpi/GpiFooter";
import Gpi from "./views/Gpi.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "gpi",
      components: {
        header: Header,
        default: Gpi,
        footer: Footer
      }
    }
  ]
});
