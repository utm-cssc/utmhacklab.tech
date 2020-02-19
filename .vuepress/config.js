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
                // text for the edit-on-github link
                // editLinkText: 'Edit this page on GitHub',
                // // config for Service Worker
                // serviceWorker: {
                //     updatePopup: {
                //         message: "New content is available.",
                //         buttonText: "Refresh"
                //     }
                // },
                // algolia docsearch options for current locale
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'The Show', link: '/the-show/' },
                    { text: 'About', link: '/about/' },
                    { text: 'Clubs', link: '/clubs/' },
                    { text: 'Office Hours', link: '/office-hours/' },
                    { text: 'Projects', link: '/projects/' },
                    { text: 'Resources', link: '/resources/' },
                    { text: 'Calendar', link: 'https://calendar.google.com/calendar/b/2?cid=dXRtaGFja2xhYm9mZmljaWFsQGdtYWlsLmNvbQ/' },
                    { text: 'Community', link: 'https://teams.microsoft.com/l/team/19%3a9a293cfeb0d44967babe95ceaeff8fe2%40thread.skype/conversations?groupId=2dba53aa-e8b2-4a9b-a206-92677860a263&tenantId=78aac226-2f03-4b4d-9037-b46d56c55210/' },
                    // { text: 'International Students', link: '/international/' },

                ],
                sidebar: {
                    '/': [/* ... */],
                    '/nested/': [/* ... */]
                }
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                // editLinkText: '在 GitHub 上编辑此页',
                // serviceWorker: {
                //     updatePopup: {
                //         message: "发现新内容可用.",
                //         buttonText: "刷新"
                //     }
                // },
                nav: [
                    { text: '首页', link: '/' },
                    { text: 'The Show', link: '/the-show/' },
                    { text: '关于', link: '/about/' },
                    { text: '社团', link: '/clubs/' },
                    { text: '工作时间', link: '/office-hours/' },
                    { text: '项目', link: '/projects/' },
                    { text: '资源', link: '/resources/' },
                    { text: '日历', link: 'https://calendar.google.com/calendar/b/2?cid=dXRtaGFja2xhYm9mZmljaWFsQGdtYWlsLmNvbQ/' },
                    { text: '加入我们', link: 'https://teams.microsoft.com/l/team/19%3a9a293cfeb0d44967babe95ceaeff8fe2%40thread.skype/conversations?groupId=2dba53aa-e8b2-4a9b-a206-92677860a263&tenantId=78aac226-2f03-4b4d-9037-b46d56c55210/' },
                    // { text: 'International Students', link: '/international/' },

                ],
                sidebar: {
                    '/zh/': [/* ... */],
                    '/zh/nested/': [/* ... */]
                }
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
            description:'Supporting UTM MCS Students'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'UTM Hacklab',
            description:'帮助 UTM MCS 学生'
        }
    }
}