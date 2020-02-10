import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
/* Layout */
import Layout from '@/views/layout'

Vue.use(Router);

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/main',
            children: [
                {
                    path: 'main',
                    component: () => import('@/views/main/index'),
                    name: 'Main',
                    meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
                }
            ]
        },
    ]
});

export default router;
