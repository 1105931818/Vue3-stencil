module.exports = {
    /* 运行环境 */
    env: {
        browser: true, //浏览器端
        es2021: true,
        node: true,
        jest: true,
    },

    parser: 'vue-eslint-parser',

    /* 规则继承 */
    extends: [
        /* 全部规则默认是关闭的，这个配置项开启推荐规则，推荐规则参照文档 */
        'eslint:recommended',

        /* TS语法规则 */
        'plugin:@typescript-eslint/recommended',

        /* VUE3语法规则 */
        'plugin:vue/vue3-essential',

        'plugin:prettier/recommended',
    ],
    /* 指定解析器选项 */
    parserOptions: {
        ecmaVersion: 'latest', //校验ECMA最新版本

        /* 指定解析器，Esprima:默认解析器，Babel-ESLint:babel解析器， @typescript-eslint/parser:TS解析器*/
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true,
        },
    },
    /* 第三方插件，插件前缀eslint-plugin-被省略 */
    plugins: ['@typescript-eslint', 'vue'],
    /* eslint规则 */
    rules: {
        'no-var': 'error', //不允许使用var
        'no-multiple-empty-lines': ['warn', { max: 1 }], //不允许多个空格
        // eslint-disable-next-line no-undef
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // eslint-disable-next-line no-undef
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unexpected-multiline': 'error', //禁止多余的空行
        'no-useless-escape': 'off', //禁止不必要的转义字符

        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error', //禁止使用@ts-ignore
        '@typescript-eslint/no-explicit-any': 'off', //禁止使用any类型
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-namespace': 'off', //禁止使用自定义TypeScript模块和命名空间
        '@typescript-eslint/semi': 'off',

        'vue/multi-word-component-names': 'off', //要求组件名称始终为‘-’链接的单词
        'vue/script-setup-uses-vars': 'error', //防止<script setup>使用的变量<template>被标记为未使用
        'vue/no-mutating-props': 'off', //不允许组件prop的改变
        'vue/attribute-hyphenation': 'off', //对模版中的自定义组件强制执行属性命名样式
    },
};
