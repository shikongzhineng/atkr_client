import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//等效于node中的const axios=require("axios")

//引入要作为全局组件的对象
import header from './components/common/header.vue'
import footer from './components/common/footer.vue'
//将header普通对象，重新封装为全局组件
Vue.component("myheader",header);
Vue.component("myfooter",footer);

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

//引入axios.js
import "./axios";

Vue.config.productionTip = false
//让axios的请求携带验证信息到服务端
//axios.defaults.withCredentials=true;
//Vue.prototype.axios=axios;
//xxx.vue中： this.axios.get(...)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
