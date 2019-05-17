import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.fullPath === '/')  {
    if(localStorage.getItem('userId')) {
      console.log("You,ve already logged in")
      next('/waitinglobby')
    } else 
     next();
  } 
  else if(!localStorage.getItem('userId')) {
    next('/');
  } else {
     next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
