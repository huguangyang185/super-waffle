import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 首页下 的  新建居民档案   关联家人
  {
    path: '/peoper',
    name: 'Peoper',
    component: () => import('../views/Index/Peoper.vue')
  },
  // 选择家庭成员
  {
    path: '/family_member',
    name: 'Family_member',
    component: () => import('../views/Index/Family_member.vue')
  },
  // 填写签约信息
  {
    path: '/sign_contract',
    name: 'Sign_contract',
    component: () => import('../views/Index/Sign_contract.vue')
  },

  // 结果
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Index/Result.vue')
  },

  // 待处理签约申请
  {
    path: '/sign_up',
    name: 'Sign_up',
    component: () => import('../views/Index/Sign_up.vue')
  },
  // 待处理服务申请
  {
    path: '/pending_service',
    name: 'Pending_service',
    component: () => import('../views/Index/Pending_service.vue')
  },

  // 签约管理
  {
    path: '/contract_management',
    name: 'Contract_management',
    component: () => import('../views/Index/Contract_management.vue')
  }

  
 
]



const router = new VueRouter({
  routes
})

export default router
