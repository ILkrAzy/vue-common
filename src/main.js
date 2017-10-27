// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'font-awesome/css/font-awesome.css';
import 'material-design-icons/iconfont/material-icons.css';
import App from './App';
import router from './router';
import './stylus/main.styl';

Vue.use(Vuetify);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
