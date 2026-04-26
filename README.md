<p align="center">
  <a href="https://wlyff.top/">
    <img src="https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/avatar.webp" width="120" height="120" alt="wlyのblog" style="border-radius: 50%;" />
  </a>
</p>

<h1 align="center">wlyのblog</h1>

<p align="center">
  <b>与你相遇，好幸运</b>
</p>

<p align="center">
  <a href="https://wlyff.top/"><img src="https://img.shields.io/badge/站点-wlyff.top-e16da7?style=flat-square" alt="site"></a>
  <a href="https://github.com/wly-wf/wly-wf.github.io/actions/workflows/gh-pages.yml"><img src="https://img.shields.io/github/actions/workflow/status/wly-wf/wly-wf.github.io/gh-pages.yml?style=flat-square" alt="build"></a>
  <a href="https://github.com/wly-wf/wly-wf.github.io/blob/main/LICENSE"><img src="https://img.shields.io/github/license/wly-wf/wly-wf.github.io?style=flat-square" alt="license"></a>
  <img src="https://img.shields.io/badge/valaxy-0.28.4-ff69b4?style=flat-square" alt="valaxy">
  <img src="https://img.shields.io/badge/theme-yun-87ceeb?style=flat-square" alt="theme">
</p>

<br>

> 一只热爱技术与分享的前端小菜鸡的个人博客。记录学习笔记、效率工具和生活中的小确幸。

## ✨ 关于本站

基于 [Valaxy](https://github.com/YunYouJun/valaxy) 构建，使用 [valaxy-theme-yun](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-yun) 云主题。

- 📝 **技术教程** — Git、Vim、C/C++、WSL2、代理配置……
- 🛠 **工具分享** — 沙拉查词、Zotero、IDM、Gemini……
- 🎮 **生活记录** — 资源推荐、音乐分享、有趣的玩意儿……
- 🎨 **自定义** — 相册、友链、纯爱小屋、一言语录……

## 🚀 本地运行

```bash
# 安装依赖
pnpm i

# 启动开发服务器
pnpm dev
```

浏览器访问 `http://localhost:4859/`，开始写作 ✍️

## 📁 目录结构

```
blog
├── pages/          # 页面 & 文章
│   ├── posts/      # 📝 博客文章（.md）
│   ├── about/      # 🙋 关于我
│   ├── albums/     # 📷 相册
│   ├── fun/        # 🎉 有趣的玩意儿
│   ├── girl/       # 💕 纯爱小屋
│   └── links/      # 🔗 友链
├── components/     # Vue 自定义组件
├── styles/         # 主题样式覆盖
├── locales/        # 国际化（中/英）
├── public/         # 静态资源
├── site.config.ts  # 站点配置
└── valaxy.config.ts # 主题 & 插件配置
```

## 📦 技术栈

| 技术 | 用途 |
|------|------|
| [Valaxy 0.28](https://github.com/YunYouJun/valaxy) | 博客框架 |
| [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) | 前端构建 |
| [TypeScript](https://www.typescriptlang.org/) | 类型支持 |
| [UnoCSS](https://unocss.dev/) | 原子化 CSS |
| [KaTeX](https://katex.org/) | 数学公式渲染 |
| [Twikoo](https://twikoo.js.org/) | 评论区 |
| [Fuse.js](https://fusejs.io/) | 全文搜索 |
| [LightGallery](https://www.lightgalleryjs.com/) | 图片灯箱 |

## 🔧 部署

推送至 `main` 分支 → GitHub Actions 自动构建 → 部署到 GitHub Pages。

同时支持：

[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)

```bash
# Docker 部署
docker build . -t wly-blog:latest
```

## 📄 License

MIT © [w乐意](https://wlyff.top/)
