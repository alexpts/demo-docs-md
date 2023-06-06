// https://v2.vuepress.vuejs.org/reference/default-theme/config.html

import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import umlPlugin from 'markdown-it-plantuml'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

let ruThemeConfig = {
    selectLanguageText: 'Языки',
    selectLanguageName: 'Русский',
    editLinkText: 'Редактировать',
    contributorsText: 'Авторы',
    lastUpdatedText: 'Обновлено',

    navbar: [
        { text: 'Главная', link: '/ru/' },
        { text: 'Паттерны',
            children: [
                {
                    text: 'peea',
                    children: [
                        { text: 'Optimistic Lock', link: '/ru/patterns/peea/optimistic_lock/' },
                    ]
                },
                { text: 'Примеры', link: '/ru/examples/' },
            ],
        },
    ],
};

let enThemeConfig = {
    selectLanguageText: 'Languages',
    selectLanguageName: 'English',

    navbar: [
        { text: 'Home', link: '/en/' },
        { text: 'Quick Start', link: '/en/guide/' },
    ],
};

module.exports = {
    base: '/demo-docs-md/', // github pages sub-url

    plugins: [
        searchPlugin(),
        nprogressPlugin(),
        // https://plugin-md-enhance.vuejs.press/guide/
        mdEnhancePlugin({
            attrs: true,
            tabs: true,
        })
    ],

    locales: {
        '/ru/': {
            lang: 'ru',
        },
        '/en/': {
            lang: 'en',
        },
    },

    theme: defaultTheme({
        search: true,

        locales: {
            '/': ruThemeConfig,
            '/ru/': ruThemeConfig,
            '/en/': enThemeConfig,
        },

        repo: 'alexpts/demo-docs-md',

        docsBranch: 'master',
        docsDir: 'docs/src',
    }),

    extendsMarkdown: (md) => {
        md.use(umlPlugin);   // required by PalmUML
    },
}
