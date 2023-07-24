import { defineConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    //获取各个环境下的对应变量
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]',
            }),
            viteMockServe({
                mockPath: 'mock',
                localEnabled: command === 'serve',
            }),
        ],

        resolve: {
            alias: {
                '@': path.resolve('./src'),
            },
        },

        /* SCSS全局变量的配置 */
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "./src/style/variable.scss";',
                },
            },
        },

        //代理跨域
        server: {
            proxy: {
                [env.VITE_APP_BASE_API]: {
                    //获取数据的服务器地址设置
                    target: env.VITE_SERVE,
                    //是否需要代理跨域
                    changeOrigin: true,
                    //路径重写
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
    };
});
