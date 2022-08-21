module.exports = {
  title: 'Vitegil',
  description: 'Vitegil Docs',
  base: '/',
  head: [
    // 设置favicon，在./vueprss/public下
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    repo: 'https://github.com/vitegil/vitegil-doc',
    theme: '@vuepress/theme-default',
    logo: '/images/logo.png',
    navbar: true,
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '开发', link: '/dev/', items: [
        { text: 'vitegil-sdk', link: '/dev/sdk/' },
        { text: 'vitegil-server', link: '/dev/server/' },
        { text: 'vitegil-admin', link: '/dev/admin/' },
      ]},
      { text: '日志', link: '/changelog/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '', // /guide/README.md
            'fastin', // /guide/fastin.md
            'config',
            'expand',
            'others',
          ]
        },
        {
          title: '鸣谢',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'inner',
          ]
        }
      ],
      '/dev/sdk/': [
        {
          title: 'SDK',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '', // /dev/sdk/README.md
            'desgin', // /dev/sdk/desgin.md
            'achieve',
            'others',
          ]
        }
      ],
      '/changelog/': [
        {
          title: '日志',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '', // /changelog/README.md
          ]
        }
      ],
      // fallback
       '/': [
           '',   /* / */
       ]
    }
  },
}