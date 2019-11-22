import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


const router = new Router({
    routes: [
        {
            path: '',
            redirect: '/order/list/Menu'
        },
        {
            path: '/payment',
            name: 'payment',
            component: () => import('@/views/Payment')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('@/views/Layout'),
            children: [
                {
                    path: 'list/:title',
                    name: 'list',
                    component: () => import('@/views/menu/index'),
                    props: true
                },
                {
                    path: 'item',
                    name: 'item',
                    component: () => import('@/views/item/index'),
                    props: true
                }
            ]
        }
    ]
});

export default router;
