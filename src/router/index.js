import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


const router = new Router({
    routes: [
        {
            path: '/payment',
            name: 'payment',
            component: () => import('@/views/Payment')
        },
        {
            path: '',
            name: 'main',
            component: () => import('@/views/order/index'),
        }
    ]
});

export default router;
