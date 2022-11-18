const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //关闭eslint检查
    publicPath: './',
    devServer: {
        proxy: {
            '/transfers': {
                target: 'https://172.24.76.113:8443',
                pathRewrite: { '^/transfers': '' },
                ws: true,
                changeOrigin: true
            }
        }
    },
})