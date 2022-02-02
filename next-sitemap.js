module.exports = {
    siteUrl: 'https://jfft.vercel.app',
    changefreq: 'daily',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{
            userAgent: '*',
            allow: '/',
        }, ],
    },
}