import { RouteRecordRaw } from 'vue-router';

export const constRoute: Array<RouteRecordRaw> = [
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: 'layout',
        meta: {
            title: '404',
        },
    },
];
