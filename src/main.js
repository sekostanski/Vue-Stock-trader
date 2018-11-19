import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueSweetalert2 from 'vue-sweetalert2';
import { routes } from './routes';
import {store} from './Store/store'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSweetalert2);

Vue.http.options.root = 'https://vue-js-stocks.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
