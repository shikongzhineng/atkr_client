import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Index from './views/Index.vue'
import SearchFlight from './views/SearchFlight.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:'',
          name:'index',
          component:Index
        },
        {
          path:'index',
          name:'index',
          component:Index
        },
        {
          path:'searchflight',
          name:'searchflight',
          component:SearchFlight
        },
        {
          path:'',
        },
        
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
