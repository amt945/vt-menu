var path = require('path')

module.exports = {
    port: 9090,
    webpack: {
        resolve: {
            alias: {
                'vt-menu': path.resolve(__dirname, 'src/index.js')
            }
        }
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}