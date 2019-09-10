import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//导入对应的路由组件
import demo from '../components/tabbar/demo';
import hu from '../components/tabbar/hu';
import ji from '../components/tabbar/ji';
import guan from '../components/tabbar/guan';
import grid from '../components/news/grid1';

Vue.use(Router)
    //创建路由对象
export default new Router({
    routes: [ //配置路由规则
        { path: '/', redirect: "/home" },
        { path: '/home', component: demo },
        { path: '/home2', component: hu },
        { path: '/home3', component: ji },
        { path: '/home4', component: guan },
        { path: '/home/grid', component: grid }

    ],
    linkActiveClass: 'active'
})