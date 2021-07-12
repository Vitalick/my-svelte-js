import { Router } from 'svelte-pilot';

export default new Router({
  routes: [
    {
      component: () => import('../App.svelte'),

      children: [
        // {
        //   name: 'footer',
        //   component: () => import('../views/Footer.svelte')
        // },

        {
          path: '/',
          component: () => import('../views/About.svelte'),
          props: route => ({ page: route.query.int('page', { defaults: 1 }) })
        },

        {
          path: '/counter',
          component: () => import('../views/Counter.svelte'),
          props: route => ({ page: route.query.int('page', { defaults: 1 }) })
        }
      ]
    }
  ]
});