import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'

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

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2025,
      beian: {
        enable: false,
        icp: '',
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
  // 设置 valaxy-addon-waline 配置项
  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://walineblog-topaz.vercel.app',
    }),
  ],
})
