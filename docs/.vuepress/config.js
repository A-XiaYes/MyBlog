const nav = require("./config/nav")
const sidebar = require("./config/sidebar")
const plugins = require("./config/plugins")



module.exports = {
  base: '/MyBlog/',
  title: 'CodeXのBlog',
  description: '以码为梦 乐在其中',
  theme: 'reco',  // 主题
  // dest: './dist',
  port: '7777',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'icon', href: '/img/avatar.jpg' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ['script', { type: 'text/javascript', src: '/js/index.js' }],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: plugins,
  themeConfig: {
    type: 'blog',
    huawei: false,
    nav,
    sidebar,
    subSidebar: 'auto',
    // 作者
    author: 'G.mi _yi',
    // 头像
    authorAvatar: '/img/avatar.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 2,
    displayAllHeaders: false,
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag',
      }
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: '木木的秘密花园',
        desc: '一心一明月，一树一年华.',
        email: 'recoluan@qq.com',
        link: 'https://www.pikamumu.top/'
      }
    ],
    // 项目开始时间
    startYear: '2020',
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: 'k1bqDk2GS6Ax0kdB9Cigvfes-gzGzoHsz',// your appId
      appKey: 'K5aou0JxMhD8b7sj3nzfzhRc', // your appKey
      placeholder: '是时候展现真正的技术了',
      avatar: 'wavatar',
      serverUrl: 'https://leanserver.smallsunnyfox.com'
    },
    logo: '/img/logo.jpg',
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    smoothScroll: true, // 页面滚动
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！',
  }
}
