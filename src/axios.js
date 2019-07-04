//引入vue
import Vue from 'vue'
//引入axios库
import axios from 'axios'

Vue.config.productionTip = false;
//跨域请求,保留session数据
axios.defaults.withCredentials=true;
//设置服务器请求基础路径
axios.defaults.baseURL='http://127.0.0.1:3000/';
// 将axios注册Vue实例
Vue.prototype.axios=axios;