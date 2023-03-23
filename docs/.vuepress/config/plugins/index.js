
module.exports = [
  // 添加动态标题的插件  https://github.com/moefyit/vuepress-plugin-dynamic-title
  [
    'vuepress-plugin-dynamic-title',
    {
      showIcon: '/favicon.ico',
      showText: '(/≧▽≦/)咦！又好了！',
      hideIcon: '/failure.ico',
      hideText: '(●—●) oh No！崩溃啦！',
      recoverTime: 2000
    }
  ],

  //为博客文章自动随机添加名人名言或其他，可自定义样式和内容的插件。 https://github.com/zpj80231/vuepress-plugin-boxx
  ['vuepress-plugin-boxx'],

  //光标效果的插件 https://github.com/moefyit/vuepress-plugin-cursor-effects
  [
    'vuepress-plugin-cursor-effects'
    // {
    //     size: 2, // size of the particle, default: 2
    //     shape: ['star' | 'circle'], // shape of the particle, default: 'star'
    //     zIndex: 999999999, // z-index property of the canvas, default: 999999999
    // }
  ],

  // 背景樱花特效 https://github.com/JabinPeng/vuepress-plugin-sakura
  [
    'vuepress-plugin-sakura',
    {
      num: 16, // 默认数量
      show: true, //  是否显示
      zIndex: -1, // 层级
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...' // 绝对路径
      }
    }
  ],

  // Vuepress 音乐播放器插件 https://github.com/vuepress-reco/vuepress-plugin-bgm-player
  [
    '@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [
        // 本地资源播放
        // {
        //     name: 'sorrow',
        //     artist: 'hill',
        //     url:'/audio/music/sorrow/hil - Sorrow.mp3',
        //     cover:'/audio/music/sorrow/sorrowCover.jpg'
        // },
        // 网络资源获取
        {
          name: '夜空中最亮的星',
          artist: '逃跑计划',
          url: 'https://music.163.com/song/media/outer/url?id=25706282',
          cover:
            'http://p1.music.126.net/Eef2K2KV9dT3XUA6_Ve-Rw==/109951165543196748.jpg?param=130y130'
        },
        {
          name: '最初的梦想',
          artist: '我想和你唱',
          url: 'https://music.163.com/song/media/outer/url?id=479422062',
          cover:
            'http://p1.music.126.net/9FhJLS1BrJdXAUJ2qjyJSg==/19212866183896782.jpg?param=130y130'
        },
        {
          name: '屋顶',
          artist: '周杰伦 / 温岚',
          url: 'https://music.163.com/song/media/outer/url?id=5257138',
          cover:
            'http://p1.music.126.net/81BsxxhomJ4aJZYvEbyPkw==/109951165671182684.jpg?param=130y130'
        }
      ],
      autoplay: false, //是否自动播放
      autoShrink: true, //是否自动缩小
      floatPosition: 'left', //指定浮窗模式浮动在哪一侧
      // 播放器位置
      position: {
        left: '1rem',
        bottom: '1rem',
        'z-index': '99999'
      }
    }
  ],

  // 图片懒加载
  // https://github.com/tolking/vuepress-plugin-img-lazy
  ['vuepress-plugin-img-lazy'],

  // 代码块复制代码功能 掘金风格
  // https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy
  // [
  //   'vuepress-plugin-nuggets-style-copy',
  //   {
  //     copyText: '复制',
  //     tip: {
  //       content: '复制成功!'
  //     }
  //   }
  // ],

  // PWA插件
  // https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-pwa
  [
    '@vuepress/plugin-pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '新的异世界挑战出现！',
        buttonText: '冒险！冲！'
      }
    }
  ]
]
