import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/GeneralViews/LoginView.vue'
import Home from '@/views/AdminViews/Home.vue'
import Classes from '../views/AdminViews/ClassView.vue'
import AdminRoles from '../views/AdminViews/AdminRoles.vue'
import vCliente from '../views/UsersViews/vcliente.vue'
import Notifications from '@/views/AdminViews/Notifications.vue'
import Events from '@/views/AdminViews/Events.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: Login,
    },
    {
      path: '/Home',
      name: 'HomeView',
      component: Home,
    },
    {
      path: '/Classes',
      name: 'Classes',
      component: Classes,
    },
    {
      path: '/Roles',
      name: 'AdminRolesView',
      component: AdminRoles,
    },
    {
      path: '/vclientePage',
      name: 'vclienteview',
      component: vCliente,
    },
    {
      path: '/Notifications',
      name: 'NotificationsView',
      component: Notifications,
    },
    {
      path: '/Events',
      name: 'EventsView',
      component: Events,
    }
  ],
})

export default router