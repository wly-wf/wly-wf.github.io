import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
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
    },

    bg_image: {
      enable: true,
      url: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%A3%81%E7%BA%B81.png',
      dark: 'https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%A3%81%E7%BA%B8dark.jpg',
      opacity: 1,
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

    footer: {
      since: 2025,
      icon: {
        animated: true,
      },
      powered: false,
      beian: {
        enable: false,
        icp: '萌ICP备20250936号',
      },
    },
  },

  unocss: { safelist },

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },

  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://walineblog-topaz.vercel.app',
    }),
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
