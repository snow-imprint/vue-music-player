import Vue from 'vue';
import App from './App.vue';
import { Toast, Indicator, MessageBox, Switch } from 'mint-ui';
import store from './store';
import router from './router';
import api from './api';
import adapt from './js/adapt';

adapt();
Vue.prototype.api = api;
Vue.component(Switch.name, Switch);
Vue.prototype.$Toast = Toast;
Vue.prototype.$Indicator = Indicator;
Vue.prototype.$MessageBox = MessageBox;
Vue.prototype.$$store = store;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
