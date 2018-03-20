import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Pages/accueil'
import pageB from '@/components/Pages/pageB'
import menuBar from '@/components/Elements/Menu'
import profil from '@/components/Pages/Profil'
import login from '@/components/Pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    }, {
      path: '/pageB',
      name: 'pageB',
      component: pageB
    }, {
      path: '/menu',
      name: 'menuBar',
      component: menuBar
    }, {
      path: '/profil',
      name: 'profil',
      component: profil
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
