---
title: Gemini使用技巧
date: 2025-8-7
update: 2025-8-7
categories: 教程
tags:
  - AI
  - 技巧
---

Google的Gemini大模型应该算得上是比较好用的了，比较出名就是**Gemini 2.5 Flash**和**Gemini 2.5 Pro**。最主要的是它可以免费使用（每天有一定的免费额度，但对于普通人来说已经足够用了）。在2025年6月30日前进行学生认证，就可以免费使用15个月的超强版**Gemini 2.5 Pro**模型，但是我没有薅到羊毛。现在分享一些Gemini的使用技巧。

<!-- more -->

## 使用Gemini（网页端）

网页端有两个地址：

> **https://aistudio.google.com**

这个网站是面向开发者的研究平台，特点是功能简陋，高级模型免费无限量，有文生图/视频等功能。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/aistudio.webp)

首先需要登录谷歌账号，界面右边可以选择大模型，可以免费使用Gemini 2.5 Pro，还可以设置一些参数。界面左边Stream是一个实时音视频对话，Generate Media是文生视频的功能，Build里面有一些代码案例，展示如何接入Gemini的API，做一些好玩有趣的应用，History可以保存一些常用的提示词。

> **https://gemini.google.com**

这个网站是面向普通用户的，简洁美观，多了一些用户友好的功能，高级模型限量。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/gemini-google.webp)

首先要登陆谷歌账户，左上角可以切换模型，免费用户使用Deep Research和Gemini 2.5 Pro存在使用限制。

> **这两个网站都需要国外的上网环境**

## 使用Gemini（调用API）

下面的表格展示了免费用户可以使用的模型

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%85%8D%E8%B4%B9%E4%BD%BF%E7%94%A8%E7%9A%84%E6%A8%A1%E5%9E%8B.webp)

其中RPM指的是每分钟的最大请求次数，RPD指的是每天的最大请求次数。

我们可以看到对于Gemini 2.5 Pro和Gemini 2.5 Flash每天的免费请求次数分别为100次和250次（数据可能会变化），已经足够用了。

### 获取API Key

下面我们要获取API密钥。回到网站**https://aistudio.google.com**，点击右上角的**Get API key**，点击**创建API密钥**，随便选个项目点击创建，然后复制API密钥并保存好。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/api%E5%AF%86%E9%92%A5.webp)

我们使用免费的AI客户端[**Cherry Studio**](https://www.cherry-ai.com/)，安装好后。点击左下角的设置来到模型服务，选择提供商Gemini，将刚刚复制的API密钥填写过来，然后添加模型，可以去之前的网页里查看可以免费使用的模型。添加完成后，回到聊天页面，选择模型，即可开始对话。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/cherrystudio.webp)

## 国内中转

Gemini的API虽好，但是有一点不足的是它有地区限制，必须连着国外的上网环境才可以使用。我们可以自建一个免费的代理，把它的API中转到国内，在国内就可以免费使用了。下面使用GitHub开源项目`openai-gemini`实现这个功能。

> **Github仓库地址：https://github.com/PublicAffairs/openai-gemini**

我们找到Deploy to Netlify，点击按钮跳转到Netlify。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/openaigemini.webp)

然后点击Connect to Github，登录自己的GitHub账户。随便起个名字点击save，等待部署完成。部署完成后，我们可以获得一个域名，这个域名在国内是可以直连的。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E7%9B%B4%E8%BF%9E%E5%9F%9F%E5%90%8D.webp)

回到Cherry Studio这边，在模型服务这里点击添加提供商类型，类型选择OpenAI，名称随便填一个，然后API密钥填写之前获得的密钥，API地址填写刚刚获得的域名，然后在前面添加`https://`，完整版就是`https://域名`，填写完成后添加模型，可以添加上面提到过的免费模型，完成后可以在聊天界面验证。这样就可以将API中转到国内了。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E6%B7%BB%E5%8A%A0%E6%A8%A1%E5%9E%8B%E6%8F%90%E4%BE%9B%E5%95%86.webp)