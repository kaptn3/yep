import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Offers from './views/Offers.vue';
import Bids from './views/Bids.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/offers',
      name: 'offers',
      component: Offers
    },
    {
      path: '/bids',
      name: 'bids',
      component: Bids
    }
  ],
});
