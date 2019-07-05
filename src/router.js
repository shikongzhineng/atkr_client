import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import SearchFlight from './views/SearchFlight.vue'

const FlightList=()=>import('./views/FlightList.vue')
const TravelDetail=()=>import('./views/TravelDetail.vue')
const Reserve=()=>import('./views/Reserve.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          name:'home',
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
          path:'flightlist',
          name:'flightlist',
          component:FlightList
        },
        {
          path:'traveldetail',
          name:'traveldetail',
          component: TravelDetail
        },
        {
          path:'reserve',
          name:'reserve',
          component:Reserve
        },
        {
          path:'login',
          name:'login',
          component:Login
        },
        {
          path:'register',
          name:'register',
          component:Register
        }
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
