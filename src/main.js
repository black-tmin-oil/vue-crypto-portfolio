import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from './router'
import vuetify from "@/plugins/vuetify";

import VueParticlesBg from "particles-bg-vue";

Vue.use(VueParticlesBg);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");