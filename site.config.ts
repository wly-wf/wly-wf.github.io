import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://wlyff.top/',
  lang: 'zh-CN',
  title: 'wlyのblog',
  author: {
    name: 'w乐意',
    email: '2931366539@qq.com',
    link: 'https://wlyff.top/',
    avatar: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%9B%BE%E7%89%87.jpg',
    status: {
      emoji: '😭',
      message: 'wlling to learn, willing to share',
    },
  },
  mode: 'auto',
  lastUpdated: true,
  favicon: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%9B%BE%E7%89%87.jpg',

  subtitle: '与你相遇 好幸运',
  description: '欢迎来到我的小窝',
  social: [
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/454669619',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/wly-wf',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Steam',
      link: 'https://steamcommunity.com/id/wly005/',
      icon: 'i-ri-steam-line',
      color: '#32769bff',
    },
    {
      name: 'E-Mail',
      link: 'mailto:2931366539@qq.com',
      icon: 'i-ri-mail-line',
      color: '#d1c844ff',
    },
  ],

  // 开启搜索功能
  search: {
    enable: true,
    type: 'fuse',
  },
  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
    },
  },

  //开启阅读统计
  statistics: {
    enable: true,
    readTime: {
       // 阅读速度
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  // 开启加密
  encrypt: {
    enable: true,
  },

  // 代码块高度限制
  codeHeightLimit: 300,

license: {
    enabled: false,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    description: '如果你喜欢的话，就请随意打赏我吧！',
    methods: [
      {
        name: '支付宝',
        url: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE%E7%A0%81.png',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/QQ%E6%94%B6%E6%AC%BE%E7%A0%81.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%AC%BE%E7%A0%81.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})


