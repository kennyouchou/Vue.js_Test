import Vue from "vue";
import App from "./App.vue";
import "@/mobile/flexible";
import "@/styles/reset.css";
import router from "@/router";

import { Tabbar, TabbarItem, NavBar,Cell,Icon, Search } from "vant";
import { Col, Row,List } from 'vant';
import { Image as VanImage } from 'vant';

Vue.use(List);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
