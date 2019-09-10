// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //导入vue文件
import App from './App' //导入App根组件
import router from './router' //导入路由模块
import mint from 'mint-ui'
import Vant from 'vant'
import 'vant/lib/index.css'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'

Vue.use(vueRouter)
Vue.use(Vant);
Vue.use(mint);
Vue.use(vueResource);


Vue.config.productionTip = false

/* eslint-disable no-new */
//实例化vue
new Vue({
    el: '#app', //挂载一个根元素
    router, //挂载路由对象到vue实例中
    components: { App },
    template: '<App/>'
})