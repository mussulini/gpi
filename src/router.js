import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/AppHeader";
import Footer from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Home from "./views/Home.vue";
import Cms from "./views/Cms.vue";
import Showroom from "./views/Showroom.vue";
import Contact from "./views/Contact.vue";
import Preview from "./views/Preview.vue";
import PreviewMobile from "./views/PreviewMobile.vue";
import PreviewTablet from "./views/PreviewTablet.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/components",
      name: "components",
      components: {
        header: Header,
        default: Components,
        footer: Footer
      }
    },
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
      path: "/showroom",
      name: "showroom",
      components: {
        header: Header,
        default: Showroom,
        footer: Footer
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: Header,
        default: Contact,
        footer: Footer
      }
    },
    {
      path: "/preview",
      name: "preview",
      components: {
        header: Header,
        default: Preview
      }
    },
    {
      path: "/preview-tablet",
      name: "preview-tablet",
      components: {
        header: Header,
        default: PreviewTablet
      }
    },
    {
      path: "/preview-mobile",
      name: "preview-mobile",
      components: {
        header: Header,
        default: PreviewMobile
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
