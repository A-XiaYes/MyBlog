module.exports = [
  { text: 'Home', link: '/', icon: 'reco-home' },
  { text: 'Notes', link: '/note/', icon: 'reco-document' },
  { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
  { text: 'About', link: '/about/', icon: 'reco-account'},
  {
    text: 'Tool',
    icon: 'reco-other',
    items: [
      {
        text: '在线编辑',
        items: [
          { text: '图片压缩', link: 'https://tinypng.com/' }
        ]
      },
      {
        text: '在线服务',
        items: [
          { text: '阿里云', link: 'https://www.aliyun.com/' },
          { text: '腾讯云', link: 'https://cloud.tencent.com/' }
        ]
      },
      {
        text: '博客指南',
        items: [
          { text: '掘金', link: 'https://juejin.im/' },
          { text: 'CSDN', link: 'https://blog.csdn.net/' }
        ]
      }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/A-XiaYes', icon: 'reco-github' }
]
