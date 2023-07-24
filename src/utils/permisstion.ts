//路由鉴权
import router from '@/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  //to:将要访问的路由，from:从哪个路由来
  document.title = to.meta.title;
  nprogress.start();
  next();
});

//全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done();
});
