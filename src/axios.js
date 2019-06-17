import Vue from "vue"
import axios from "axios"
//3. 设置跨域请求保存session
axios.defaults.withCredentials = true;
//4. 设置请求服务器基础路径
axios.defaults.baseURL = "http://176.233.2.59:3000/";

//5. 将axios注册到Vue实例
Vue.prototype.axios = axios;