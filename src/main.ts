import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import router from './router';
import pinia from './pinia';
import App from './App.vue';
import gloalComponent from '@/components';
import './style/index.scss';
import 'virtual:svg-icons-register';
import '@/utils/permisstion'

const app = createApp(App);

app.use(ElementPlus, {
    locale: zhCn,
});

app.use(router);

app.use(gloalComponent);

app.use(pinia);

app.mount('#app');
