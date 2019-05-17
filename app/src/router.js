import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/waitinglobby',
      name: 'waitinglobby',
      component: () => import(/* webpackChunkName: "WaitingLobby" */ './views/WaitingLobby.vue')
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: () => import(/* webpackChunkName: "lobby" */ './views/Lobby.vue')
    },
    {
      path: '/front',
      name: 'front',
      component: () => import( /* webpackChunkName: 'front' */ './views/Front.vue')
    },
    {
      path: '/room/:id',
      name: 'room',
      component: () => import( /* webpackChunkName: 'front' */ './views/Room.vue')
    },
    {
      path: '/battleview',
      name: 'battleview',
      component: () => import(/* webpackChunkName: "lobby" */ './views/Battleview.vue')
    }
  ]
})