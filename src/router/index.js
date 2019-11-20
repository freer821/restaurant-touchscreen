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
            path: '/main',
            name: 'main',
            component: () => import('@/views/Layout'),
            children: [
                {
                    path: 'list/:title',
                    name: 'list',
                    component: () => import('@/components/MenuList'),
                    props: true
                },
                {
                    path: 'detail/:title',
                    name: 'detail',
                    component: () => import('@/components/ItemDetail'),
                    props: true
                }
            ]
        }
    ]
});

export default router;
