import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Admin from '../views/AdminView.vue'
import Professor from '../views/ProfessorView.vue'
import Student from '../views//StudentView.vue'
import HomeView from '../views/Home.vue'
import EventsView from '../views/Events.vue'

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
      component: Student
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Events',
      name: 'Events',
      component: EventsView
    }
  ],
})

export default router