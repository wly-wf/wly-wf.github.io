import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonComponents } from 'valaxy-addon-components'
// import { addonWaline } from 'valaxy-addon-waline'
import { addonTwikoo } from 'valaxy-addon-twikoo'
// import { addonMeting } from 'valaxy-addon-meting'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'w乐意的小站',
      cloud: {
        enable: true,
      },
      duration: 500,
    },

    bg_image: {
      enable: true,
      url: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/light.png',
      dark: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/dark.png',
      opacity: 1,
    },

    colors: {
      primary: '#e16da7ff',
    },

    nav: [
      {  
        text: '博客',  link: '/posts/',  icon: 'i-ri-article-line',  
      },
      {  
        text: '归档',  link: '/archives/',  icon: 'i-ri-archive-line',  
      },  
      {  
        text: '分类',  link: '/categories/',  icon: 'i-ri-folder-2-line',  
      },  
      {  
        text: '标签',  link: '/tags/',  icon: 'i-ri-price-tag-3-line',  
      },
      {
        text: '友链',link: '/links/',icon: 'i-ri-links-line',
      },
      {
        text: '关于我',link: '/about/',icon: 'i-ri-user-line',
      },
    ],

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-links-line',
        color: 'dodgerblue',
      },
      {
        name: '最喜欢的女孩子',
        url: '/girl/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    say: {
      enable: true,
      api: 'https://el-bot-api.vercel.app/api/words/wanan',
      hitokoto: {
        enable: true,
        api: 'https://v1.hitokoto.cn/?c=d&c=h&c=i&c=j&c=k&c=l',
      },
    },

    footer: {
      cloud: {
        enable: true,
      },
      since: 2025,
      icon: {
        enable: true,
        name: 'i-ri-heart-line',
        color: '#ee4978ff',
        animated: true,
        url: 'https://wlyblog.top',
        title: 'Made with ❤️ w乐意',
      },
      powered: true,
      beian: {
        enable: false,
        icp: '萌ICP备20250936号',
      },
    },
  },

  unocss: { safelist },

  
  addons: [
    addonComponents(),
    addonTwikoo({
      envId: 'https://wlyblogtwikoo.netlify.app/.netlify/functions/twikoo', // 填写你的环境 ID
    }),
    // addonWaline({
    //   // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
    //   serverURL: 'https://walineblog-topaz.vercel.app',
    // }),
    // addonMeting({
    //   global: true,
    //   // Meting 配置项，参考 https://metingjs.github.io/meting/#/options
    //   props: {
    //     id: '2619366284',
    //     server: 'netease',
    //     type: 'playlist',
    //   },
    // }),
  ],
  
})
