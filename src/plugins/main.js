import "../assets/scss/style.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";

export default {
    install(Vue) {
        Vue.use(globalComponents);
        Vue.use(globalDirectives);
        Vue.use(VueLazyload);
    }
};
