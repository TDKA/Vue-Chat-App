import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chat from '../views/Chat.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('User is ', user);
  if(!user) {
    next({name: 'Welcome'})
  }else {

    next()
  }
}

// no auth if logged in guard

const noAuthIfLogged = (to, from, next) => {
    let user = projectAuth.currentUser
  // console.log('User is ', user);
  if(user) {
    next({name: 'Chat'})
  }else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: noAuthIfLogged
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
