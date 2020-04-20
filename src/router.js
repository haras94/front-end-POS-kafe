import vue from 'vue';
import VueRouter from 'vue-router';

import dash from './views/dash.vue';
import register from './views/register.vue';
import login from './views/login.vue';
import store from '../src/store/index';

vue.use(VueRouter);

const routes = [
  {
    path: '/dash',
    name: 'dash',
    component: dash,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/history',
    name: 'history',
    component: history,
  },

];

const router = new VueRouter({
  mode: 'history',
  routes,
  store,
});

export default router;
