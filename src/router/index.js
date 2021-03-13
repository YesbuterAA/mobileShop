import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const HomePage = () => import('../components/HomePage.vue')
const Digital = () => import('../components/Digital.vue')
const Digging = () => import('../components/Digging.vue')
const Forum = () => import('../components/Forum.vue')
const My = () => import('../components/My.vue')
const Swiper = () => import('../components/Swiper.vue')
const Dynamic = () => import('../components/Dynamic.vue')
const idigitalfrome = () => import('../components/digital/idigitalfrome.vue')
const phone = () => import('../components/digital/phone.vue')
const setListStats = () => import('../components/digital/setListStats.vue')
const Login = () => import('../components/Login.vue')
const routes = [
  {
    path: '/',
    redirect: '/HomePage'
  },
  {
    path: '/HomePage',
    component: HomePage
  },
  {
    path: '/Digital',
    component: Digital,
    redirect:'/Digital/idigitalfrome',
    children:[
      {
        path: 'phone',
        component: phone
      },
      {
        path: 'setListStats',
        component: setListStats
      },
      {
        path: 'idigitalfrome',
        component: idigitalfrome,
      }
    ]
  },
  {
    path: '/Digging',
    component: Digging
  },
  {
    path: '/Forum',
    component: Forum,
    children: [
    ]
  },
  {
    path: '/My',
    component: My
  },
  {
    path: '/Swiper',
    component: Swiper
  },
  {
    path: '/Dynamic',
    component: Dynamic
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
