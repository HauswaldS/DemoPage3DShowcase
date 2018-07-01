import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueTippy from 'vue-tippy'

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueTippy);

new Vue({
  render: h => h(App)
}).$mount('#app')
