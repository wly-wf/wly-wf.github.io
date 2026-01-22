---
title: 使用脚本永久激活IDM
date: 2026-01-22
update: 2026-01-22
categories: 教程
tags:
  - IDM
  - 软件
---

你是否还在为IDM的30天试用期结束而烦恼？是否厌倦了每次重装都要重新激活？今天，我将手把手教你使用由开发者 Astro-Saurav 打造的开源脚本，一键实现IDM的永久激活或试用期冻结，让你的下载体验再无后顾之忧。

本教程基于官方GitHub项目，所有操作均在本地完成，安全透明，无任何第三方风险。

<!-- more -->

### 安装步骤

第一步：准备工作

请先卸载或移除任何旧的IDM破解补丁，确保IDM为纯净的官方安装版本，建议从官网重新安装正版。

第二步：执行激活

以管理员身份运行PowerShell，在Windows搜索栏中输入“PowerShell”，右键选择“以管理员身份运行”。在打开的PowerShell窗口中，右键粘贴你复制的命令，然后按回车键执行。脚本将自动下载并运行，弹出一个黑色的命令行菜单。

```bash
irm "https://bit.ly/idm_Activate" | iex
```

或

```bash
irm "https://raw.githubusercontent.com/Astro-Saurav/IDM-Activation-Script/main/IAS.ps1" | iex
```

在菜单中，根据你的需求选择数字：

[1] Activate：永久激活IDM（推荐）

[2] Freeze Trial：冻结试用期，让IDM永远显示“30天试用”

[3] Reset Activation / Trial：重置激活状态，用于修复异常

[4] Download IDM：下载最新版IDM

[5] Help：查看帮助

[0] Exit：退出脚本

选择后按回车，脚本将自动完成后续操作。

第三步：验证与使用

关闭并重新打开Internet Download Manager，你会看到状态栏显示“已激活”或“试用期已冻结”。现在，你可以尽情享受IDM的全部功能，包括多线程加速、视频嗅探、站点抓取等，再也不用担心试用期到期了！

### 重要提醒

本脚本通过修改系统注册表实现功能，属于技术研究范畴。请仅用于个人学习和测试，尊重软件版权。商业用途请支持正版。
操作前请备份重要数据，脚本本身无害，但任何对系统注册表的修改都存在一定风险。

本教程参考了下面的链接：https://www.bilibili.com/opus/1151236262531694598