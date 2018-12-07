import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index';

Vue.use(Router);

export function createRouter() {
    const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'Index',
                component: Index
            }
        ]
    })
    return router;
}