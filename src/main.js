// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import AV from 'leancloud-storage'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
const appId = 'C5AXdInI1BOzXz0VCfBrsVfD-gzGzoHsz';
const appKey = 'NgYXXvT9d48vLOgDpr6CLPVc';
AV.init({ appId, appKey });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
