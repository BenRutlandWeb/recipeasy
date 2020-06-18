import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import _router from "./router/router.js";
import _store from "./store/store.js";

import Button from "./components/button.js";
import Icon from "./components/Icon.js";
import Img from "./components/img.js";
import NavBar from "./components/nav-bar.js";
import Panel from "./components/Panel.js";
import TagSelect from "./components/TagSelect.js";
import InputList from "./components/InputList.js";

Vue.component("app-button", Button);
Vue.component("app-icon", Icon);
Vue.component("Icon", Icon);
Vue.component("app-img", Img);
Vue.component("nav-bar", NavBar);
Vue.component("Panel", Panel);
Vue.component("TagSelect", TagSelect);
Vue.component("InputList", InputList);

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(_router);

const store = new Vuex.Store(_store);

new Vue({
  router,
  store,
  data: {
    title: "Recipeasy",
  },
  mounted() {
    //navigator.serviceWorker.register("/sw.js");
  },
  template: `
<div id="app">
  <router-view />
</div>
`,
}).$mount("#app");
