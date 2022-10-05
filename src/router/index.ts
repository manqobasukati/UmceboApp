import SignInVue from '@/pages/Auth/SignIn.vue';
import SignUpVue from '@/pages/Auth/SignUp.vue';
import HomeVue from '@/pages/Home.vue';
import GenericServiceLayoutVue from '@/pages/Services/GenericServiceLayout.vue';
import TransactionsServiceVue from '@/pages/Services/TransactionsService.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/auth/sign-in',
      name: 'AuthSignIn',
      component: SignInVue,
    },
    {
      path: '/auth/sign-up',
      name: 'AuthSignUp',
      component: SignUpVue,
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeVue,
    },
    {
      path: '/Home/Transactions',
      component: TransactionsServiceVue,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
