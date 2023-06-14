import Vue from 'vue'
import VueRouter from 'vue-router'
import BoardList from "@/pages/CounsultingPage.vue";
import BoardDetail from "@/components/board/BoardDetail";
import BoardCreate from "@/components/board/BoardCreate";
import NotFound from "@/components/NotFound";
import LoginTry from '@/pages/LoginPage.vue'
import SignUp from '@/pages/SignUp.vue'
import ForgotPassword from "@/pages/ForgotPassword.vue";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/HomePage.vue')
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: () => import('../pages/ForgotPassword.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../pages/SearchPage.vue')
  },
  {
    path: '/beforecounsulting',
    name: 'beforecounsulting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/BeforeCounsultingPage.vue')
  },
  {
    path: '/counsulting',
    name: 'counsulting',
    component: () => import(/* webpackChunkName: "about" */ '../pages/CounsultingPage.vue')
  },
  {
    path: '/registercounselor',
    name: 'registercounselor',
    component: () => import(/* webpackChunkName: "about" */ '../pages/RegisterCounselorPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ContactPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../pages/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../pages/RegisterPage.vue')
  },
  {
    path: '/board',
    name: "BoardList",
    component: BoardList
  },
  {
    path: "/board/detail/:contentId",
    name: "BoardDetail",
    component: BoardDetail
  },{
    path: "/board/create/:contentId?",
    name: "BoardCreate",
    component: BoardCreate
  },
  {
    path: "*",
    component: NotFound
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginTry
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
]

const router = new VueRouter({
  routes
})

export default router
