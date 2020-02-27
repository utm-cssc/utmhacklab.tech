module.exports = {
    title: 'UTM Hacklab',
    description: "The support wing of UTM MCS Societies.",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'stylesheet', href: '/font-awesome-all.css' }],
        ['link', { rel: 'stylesheet', href: '/font-awesome-all.css' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    ],
    themeConfig: {
        logo: '/logos/hacklab.png',
        repo: 'utm-hacklab/utmhacklab.tech',
        editLinks: true,
        editLinkText: 'Help us improve the Hacklab website!',
        lastUpdated: 'Last Updated',
        searchPlaceholder: 'Explore...',
        smoothScroll: true,
        sidebar: 'auto',
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Languages',
                nav: [
                    { text: 'Resources', link: '/resources/', items: [
                        { text: 'Podcasts', link: '/resources/#hacklab-podcasts' },
                        { text: 'Course Materials', link: '/resources/#utm-courses' },
                        { text: 'Jobs', link: '/resources/#all-about-job-applications' },
                        { text: 'Design Tips', link: '/resources/#design' },
                        { text: 'Motivated Learning', link: '/resources/#getting-motivated' },
                        { text: 'Markdown How-to', link: '/resources/#markdown' },
                        { text: 'Code Collaboration', link: '/resources/#collaboration' },
                        { text: 'Tools for focusing', link: '/resources/#focus' },
                    ] },
                    { text: 'Projects', link: '/projects/' },
                    { text: 'The Show', link: '/the-show/' },
                    { text: 'Community', link: 'https://teams.microsoft.com/l/team/19%3a9a293cfeb0d44967babe95ceaeff8fe2%40thread.skype/conversations?groupId=2dba53aa-e8b2-4a9b-a206-92677860a263&tenantId=78aac226-2f03-4b4d-9037-b46d56c55210/' },
                    // { text: 'International Students', link: '/international/' },
                ],
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: 'The Show', link: '/the-show/' },
                    { text: '关于', link: '/zh/about/' },
                    { text: '社团', link: '/zh/clubs/' },
                    { text: '工作时间', link: '/zh/office-hours/' },
                    { text: '项目', link: '/zh/projects/' },
                    { text: '资源', link: '/zh/resources/' },
                    { text: '日历', link: 'https://calendar.google.com/calendar/b/2?cid=dXRtaGFja2xhYm9mZmljaWFsQGdtYWlsLmNvbQ/' },
                    // { text: 'International Students', link: '/international/' },

                ],
            }
        },

    },
    dest: "./docs",
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'UTM Hacklab',
            description: 'Supporting UTM MCS Students'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'UTM Hacklab',
            description: '帮助 UTM MCS 学生'
        }
    },
    chainWebpack: config => {
        config.module.rules.delete('svg')
        config.module
            .rule('svg')
            .test(/\.svg$/)
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .end()
    }
}