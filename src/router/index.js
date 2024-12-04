import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Admin from '../views/AdminView.vue'
import Professor from '../views/ProfessorView.vue'
import Student from '../views//StudentView.vue'

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
  ],
})

export default router