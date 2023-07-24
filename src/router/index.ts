//history:createWebHashHistory()
//history:createMemoryHistory()
import { createRouter, createWebHashHistory } from 'vue-router';
import { constRoute } from './routes';

const router = createRouter({
    //路由模式：hash
    history: createWebHashHistory(),
    routes: constRoute,
    scrollBehavior() {
        return {
            left: 0,
            top: 0,
        };
    },
});

export default router;
