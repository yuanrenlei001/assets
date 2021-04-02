// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'
import echarts from 'echarts'
import 'default-passive-events'
import '@/assets/main.css'
import App from './App'
import router from './router'
Vue.prototype.$echarts = echarts
Vue.prototype.$qs = qs
Vue.use(ElementUI);
Vue.config.productionTip = false
// axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
// let base = process.env.NODE_ENV === 'production'?'http://39.100.95.204:1022':'/api';
// Vue.prototype.getAjax = '/api';
Vue.filter('dateFormat', function(originVal) {
    const dt = new Date(originVal)

    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')

    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
// Vue.prototype.getAjax = 'http://39.100.95.204:1022';
Vue.prototype.getAjax = 'http://61.153.180.66:9098/apis';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
