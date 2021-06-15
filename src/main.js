import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false;

// Use Bootstrap-Vue in the whole project
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
