import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/GeneralViews/LoginView.vue'
import Admin from '../views/AdminViews/AdminView.vue'
import Professor from '../views/ProfessorViews/ProfessorView.vue'
import Student from '../views/UsersViews/StudentView.vue'
import Classes from '../views/AdminViews/ClassView.vue'
import Classes from '../views/AdminViews/adminRoles.vue'
import vCliente from '../views/UsersViews/vcliente.vue'
import Home from '@/views/AdminViews/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: Login,
    },
    {
      path: '/AdministratorPage',
      name: 'AdminView',
      component: Admin,
    },
    {
      path: '/ProfessorPage',
      name: 'ProfessorView',
      component: Professor,
    },
    {
      path: '/StudentPage',
      name: 'StudentView',
      component: Student,
    },
    {
      path: '/Roles',
      name: 'adminRoles',
      component: vCliente,
    },
    {
      path: '/Classes',
      name: 'Classes',
      component: Classes,
    },
    {
      path: '/vclientePage',
      name: 'vclienteview',
      component: vcliente,
    },
    {
      path: '/Home',
      name: 'HomeView',
      component: Home,
    }
  ],
})

export default router