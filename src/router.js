import vue from 'vue';
import VueRouter from 'vue-router';

import dash from './views/dash.vue';
import register from './views/register.vue';
import login from './views/login.vue';

vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dash',
    component: dash,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },

];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
