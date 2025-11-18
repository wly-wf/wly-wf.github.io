---
title: Valaxy博客配置教程
date: 2025-10-19
update: 2025-10-19
categories: 教程
tags:
  - 博客
  - Valaxy
---

## 前言

无意间看到

<!-- more -->

## 开始-创建Valaxy项目

### 环境配置

首先你需要安装版本号高于`20.19.0`的Node.js，你可以[点我进入Node.js的官网](https://nodejs.org/zh-cn)。

安装完成后，你可以在命令行中输入下面的代码查看Node的版本：

```bash
node -v
```

> 在Windows下打开命令行：按下Win+R，打开运行，输入`cmd`

### 创建Valaxy

然后你需要创建一个文件夹来存放博客所需的文件，这里以`D:\blog\Valaxy`为例。进入博客文件夹，在空白处单击右键，选择在终端中打开。接下来我们选择在本地创建，可以使用`npm`、`pnpm`创建，其中`npm`会随着Node.js一起安装。根据官网的建议，我们使用`pnpm`来创建。首先我们安装`pnpm`：

```bash
npm install -g pnpm
```

然后创建Valaxy：

```bash
pnpm create valaxy
```

然后你会遇到一系列步骤，根据命令行提示进行创建即可：

```bash
🌌 Valaxy  v0.26.6
? Select a type: › - Use arrow-keys. Return to submit.
❯   Blog - For Most Users 【Press Enter】
    Theme - For Theme Developers
    Addon - For Addon Developers

? Project name: › wly-blog 【Press Enter】
  📁 D:\blog\Valaxy\wly-blog

  Scaffolding project in wly-blog ...
  Done.

? Install and start it now? › (Y/n) Press Y

? Choose the agent › - Use arrow-keys. Return to submit.
    npm
    yarn
❯   pnpm 【Press Enter】
```

等待一会就创建好了，此时我们可以按`o`打开预览，按`e`可以在VSCode中编辑。

> VSCode全称为**Visual Studio Code**，是一款非常好用的代码编辑器，你可以[点我进入官网](https://code.visualstudio.com/)。

### 简单使用

首次使用，进入博客文件夹，打开终端，安装依赖：

```bash
pnpm i
```

启动预览

```bash
pnpm run dev
```

## 使用-配置Valaxy

### 目录结构

首次创建完成后，主要的文件如下：

- `components/`：自定义组件
- `layouts/`：自定义布局
- `locals/`：自定义国际化关键词
- `pages/`：页面
  - `about/`：关于
  - `archives/`：归档
  - `categories/`：目录
  - `posts/`：文章
  - `tags/`：标签
- `public/`静态资源
- `styles/`：自定义样式
- `site.config.ts`：站点配置文件
- `valaxy.config.ts`：用户配置文件

我们一般只需要配置`site.config.ts`和`valaxy.config.ts`这两个文件来设置博客样式；我们可以在`pages/posts/`文件夹新建`.md`文件来编写博客文章，语法为markdown。

### 配置site.config.ts文件

建议使用VSCode编辑器来修改文件，并按照建议安装Valaxy相关插件。

#### 网站相关

```typescript [site.config.ts]
url: 'https://wlyff.top/',       // 网站网址
timezone: 'Asia/Shanghai',       // 时区
lang: 'zh-CN',                   // 语言
title: 'wlyのblog',              // 站点标题
subtitle: '与你相遇 好幸运',      // 站点副标题
description: '欢迎来到我的小窝',  // 站点描述
// 博客作者信息
author: {
  name: 'w乐意',
  email: '2931366539@qq.com',
  link: 'https://wlyff.top/',
  avatar: 'https://xxx',        //头像，也可以把图片放在博客目录下使用相对路径引用
  status: {
    emoji: '😊',               //头像右下角的表情
    message: 'wlling to learn, willing to share',   // 鼠标悬停时显示的话
  },
},
favicon: 'https://xxx',         //网站图标
```

#### 社交链接

```typescript [site.config.ts]
url: 'https://wlyff.top/',       // 网站网址
timezone: 'Asia/Shanghai',       // 时区
lang: 'zh-CN',                   // 语言
title: 'wlyのblog',              // 站点标题
subtitle: '与你相遇 好幸运',      // 站点副标题
description: '欢迎来到我的小窝',  // 站点描述
// 博客作者信息
author: {
  name: 'w乐意',
  email: '2931366539@qq.com',
  link: 'https://wlyff.top/',
  avatar: 'https://xxx',        //头像，也可以把图片放在博客目录下使用相对路径引用
  status: {
    emoji: '😊',               //头像右下角的表情
    message: 'wlling to learn, willing to share',   // 鼠标悬停时显示的话
  },
},
favicon: 'https://xxx',         //网站图标
```

## 美化页脚

### 站点时间统计

我们可能希望能够在网站页脚处显示网站运行时间，在Valaxy中，可以利用**VCLiveTime**实现

1、首先要安装Valaxy的通用插件：`valaxy-addon-components`，该插件为Valaxy提供通用Vue组件

```bash
pnpm add valaxy-addon-components
```
2、然后启用该插件，只需在`valaxy.config.ts`文件中添加以下代码即可
```typescript [valaxy.config.ts]
import { defineValaxyConfig } from 'valaxy'
import { addonComponents } from 'valaxy-addon-components'

export default defineValaxyConfig({
  addons: [
    addonComponents(),
  ],
})
```

3、为了能够将其挂载在网站的页脚，我们可以在`components`文件夹下新建一个文件，可以命名为`YunFooter.vue`，并在里面添加如下代码：

```vue [component/YunFooter.vue]
<template>
  <YunFooter>
    <VCLiveTime start-time="2022-01-01">
      <template #live-time-before>
        <span>本站已运行</span>
      </template>
      <template #live-time-after>
        <span>后缀</span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>
```

### 站点访问统计

我们可能希望能够在网站页脚处统计网站的访客数量和访问次数，我们可以利用[不蒜子统计](https://www.busuanzi.cc/)来实现

我们只需要在`YunFooter.vue`文件下添加一下代码即可：

```vue [component/YunFooter.vue]
<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>
    <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>
  </YunFooter>
</template>
```
### 网站徽章

我们还可能希望能够在网站页脚处显示一些徽章，用于展示状态、链接或提供某种信息，例如**备案信息徽章**、**技术栈徽章**以及**服务提供商徽章**。我们可以通过一个网站来实现：https://shields.io/


