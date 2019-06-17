import Vue from 'vue'
import Router from 'vue-router'

import Index from './components/index'

import flightList from './components/flightList'
import traveldigest from './components/common/travelDigest.vue'
import breadcrumb from './components/common/breadCrumb.vue'
import listitem from './components/common/listItem.vue'
import searchflight from './components/searchFlight.vue'
import traveldetail from './components/travelDetail.vue'
import reserve from './components/reserve.vue'
import pInformation from './components/pInformation.vue'


import Login from './components/login'
import registe from './components/registe.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component: Index},
    {path:"/index", component:Index},

    {path:"/login",component:Login},
    {path:"/registe",component:registe},

    {path:"/searchflight",component:searchflight},
    {path:"/flightlist", component:flightList},
    {path:"/traveldetail",component:traveldetail},
    {path:"/reserve",component:reserve},
    {path:"/pinformation",component:pInformation},
    


    //{path:"/flightList", component:flightList},
    //{path:"/traveldigest",component:traveldigest},
    //{path:"/breadcrumb",component:breadcrumb},
    //{path:"/listitem",component:listitem},
  ]
})
