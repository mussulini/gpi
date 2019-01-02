import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Home from "./views/Home.vue";
import Cms from "./views/Cms.vue";
import Components from "./views/Components.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: Header,
        default: Home,
        footer: Footer
      }
    },
    {
      path: "/cms",
      name: "cms",
      components: {
        header: Header,
        default: Cms,
        footer: Footer
      }
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: Header,
        default: Components,
        footer: Footer
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
