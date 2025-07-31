import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://wlyff.top/',
  lang: 'zh-CN',
  title: 'wlyのblog',
  author: {
    name: 'w乐意',
    email: '2931366539@qq.com',
    link: 'https://wlyff.top/',
    // avatar: 'https://cdn.yunyoujun.cn/img/avatar.jpg',
    avatar: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.jpg',
    status: {
      emoji: '😀',
      message: 'wlling to learn, willing to share',
    },
  },

  favicon: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.jpg',

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
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    {
      name: 'E-Mail',
      link: 'mailto:2931366539@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    // {
    //   name: 'QQ 群 1050458482',
    //   link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    // {
    //   name: '网易云音乐',
    //   link: 'https://music.163.com/#/user/home?id=247102977',
    //   icon: 'i-ri-netease-cloud-music-line',
    //   color: '#C20C0C',
    // },
    // {
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-x-fill',
    //   color: 'black',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    // {
    //   name: 'Travelling',
    //   link: 'https://www.travellings.cn/go.html',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  search: {
    enable: false,
  },

  mediumZoom: {
    enable: true,
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

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
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
