
const audios = require("../audios")

module.exports = {
  "@vuepress-reco/vuepress-plugin-bgm-player": {
    audios,
    position: {
      bottom: "50px"
    }
  },
  "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
    theme: ['shizuku', 'z16', 'miku', 'haru2', 'koharu'],
    messages: {
      welcome: '欢迎来到' + 'CodeXのBlog' + '😀😁😄😃',
      home: '给你闭上眼睛捂住耳朵的信任😉',
      close: '您确定要失去我吗💢~~'
    }
  },
  // "dynamic-title": {
  //   showIcon: "/favicon.ico",
  //   showText: "(/≧▽≦/)咦！又好了！",
  //   hideIcon: "/failure.ico",
  //   hideText: "(●—●)喔哟，崩溃啦！",
  //   recoverTime: 2000
  // },
  "@vuepress/pwa": {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  },
  "vuepress-plugin-nuggets-style-copy": {
    copyText: "复制代码",
    tip: {
      content: "复制成功!"
    }
  }
}