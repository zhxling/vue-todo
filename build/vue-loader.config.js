module.exports = (isDev) => {
    return {
        preserveWhitespace: true,
        extractCSS: !isDev,
        cssModules: {},
        // hotReload: false, // 根据环境变量自动设置
    }
}