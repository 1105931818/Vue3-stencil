module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-html/vue',
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-recess-order',
        'stylelint-config-prettier'
    ],
    overrides: [
        {
            files: ['**/*.(scss|css|vue|html)'],
            customSyntax: 'postcss-scss'
        },
        {
            files: ['**/*.(vue|html)'],
            customSyntax: 'postcss-html'
        }
    ],
    ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.ts',
        '**/*.tsx',
        '**/*.json',
        '**/*.md',
        '**/*.yaml'
    ],
    rules: {
        'value-keyword-case': null,     //在CSS中使用v-bind,不报错
        'no-descending-specificity': null,      //禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
        'function-url-quotes': 'always',        //要求或禁止URL的引号。always必须加上引号，never没有引号
        'no-empty-source': null,        //关闭禁止空源码
        'selector-class-pattern': null,     //关闭强制选择器类名的格式
        'property-no-unknown': null,        //禁止未知的属性（true为不允许）
        'block-opening-brace-space-before': 'always',       //大括号之前必须有一个空格或不能有空格
        'value-no-vendor-prefix': null,     //关闭属性值前缀 --webkit-box
        'property-no-vendor-prefix': null,      //关闭属性前缀 --webkit-mask
        'selector-pseudo-class-no-unknown': [
            //不允许未知的选择器
            true,
            {
                ignorePseudoClasses: ['global', 'v-deep', 'deep']   //忽略属性，修改element默认样式的时候能使用到
            }
        ]
    }
}