import { createRouter, createWebHistory } from 'vue-router';
import ListPage from '../components/ListPage.vue';
import NotFound from '../components/NotFound.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: ListPage,
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
