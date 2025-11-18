---
title: Win11右键菜单改为Win10样式
date: 2025-10-24
update: 2025-10-24
categories: 教程
tags:
  - 技巧
  - Windows
---

最近觉得Win11的右键菜单太难用了，每次都要点显示更多选项才能找到想要的功能，然后就想着改回Win10的那种样子。

<!-- more -->

## 配置方法

首先按组合键`Win+X`，在弹出的界面中选择**终端管理员(A)**，打开终端，然后输入下面的命令，回车确定，显示“操作成功完成”。

```bash
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

这时候还没有生效，需要重启生效，如果不想要重启，可以打开**任务管理器**，右键**Windows资源管理器**，点击重新启动，这个时候就切换成功了。

后面如果想要切换回Win11的样式，可以输入下面代码

```bash
reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f
```