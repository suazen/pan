import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export const routerMap=[
  {
    path:'/login',
    name:'Login',
    component:() => import('@/components/Login')
  },{
    path:'/register',
    name:'Register',
    component:() => import('@/components/Register')
  },{
    path:'/hello',
    name:'HelloWorld',
    component:() => import('@/components/HelloWorld')
  }
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routerMap
})
