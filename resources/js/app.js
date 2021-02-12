import Vue from "vue";
import App from "./App.vue";
// Vuex Store
import store from "./store";
// Vue Router
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as mdb from "mdb-ui-kit"; // lib

import "mdb-ui-kit/css/mdb.min.css";
import "animate.css";

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

import vSelect from "vue-select";
Vue.component("v-select", vSelect);

// import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
// Vue.use(SliderPlugin);

import "vue-select/dist/vue-select.css";

import AOS from "aos";

import "aos/dist/aos.css";

import VueContentPlaceholders from 'vue-content-placeholders'
 
Vue.use(VueContentPlaceholders)

new Vue({
    created() {
        AOS.init();
    },
    store,
    router,
    mdb,
    render: h => h(App)
}).$mount("#app");
import "../js/assets/scss/main.scss";
import "@syncfusion/ej2-vue-inputs/styles/material.css";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";