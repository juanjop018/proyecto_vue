import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/GeneralViews/LoginView.vue'
import Admin from '../views/AdminViews/AdminView.vue'
import Professor from '../views/ProfessorViews/ProfessorView.vue'
import Student from '../views/UsersViews/StudentView.vue'
import Classes from '../views/AdminViews/ClassView.vue'

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
      component: Roles,
    },
    {
      path: '/Classes',
      name: 'Classes',
      component: Classes,
    },
  ],
})

export default router