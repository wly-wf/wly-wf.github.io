---
title: Valaxy博客配置教程
date: 2025-10-19
update: 2025-10-19
categories: 教程
tags:
  - 博客
  - Valaxy
---



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

进入博客文件夹，打开终端，启动预览：

```bash
pnpm run dev
```



## 使用-配置Valaxy

### 目录结构
