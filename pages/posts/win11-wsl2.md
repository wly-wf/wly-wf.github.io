---
title: Windows 11安装WSL2
date: 2026-4-14
update: 2026-4-14
categories: 教程
tags:
  - Windows
  - WSL2
---

今天记录一下如何在Windows11系统上安装WSL2，并将其从默认安装位置C盘转移到D盘。

## 前置准备

### CPU虚拟化

首先需要检查电脑是否开启了CPU虚拟化功能，可以打开任务管理器并选择性能选项卡，在CPU界面的右下角可以看到**虚拟化**，如果显示是已启用，说明CPU虚拟化已开启。如果未开启，需要进入电脑的bios进行开启，具体开启方法请自行搜索教程。

<!-- more -->

### 启用Windows功能

然后需要开启两项功能：**适用于Linux的Windows子系统**、**虚拟机平台**。虚拟机平台在某些电脑上可能会显示为英文。

方法一：

在开始界面搜索**功能**，找到**启用或关闭Windows功能**并打开，开启上述两项功能。

方法二：

也可以通过命令行开启，以管理员身份打开Powershell，执行下面命令：

1、打开适用于Linux的Windows子系统

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

2、打开虚拟机平台

```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

设置完成后，需要重启电脑使设置生效。

## 安装和转移

### 安装Ubuntu24.04

首先执行下面的命令，更新wsl

```bash
wsl --update
```

然后执行下面命令查看支持的发行版

```bash
wsl --list --online
```

这里以Ubuntu24.04为例，执行下面的命令安装

```bash
wsl install -d Ubuntu24.04
```

安装完成后会要求你输入用户名和密码，按照提示输入即可，其中密码输入的时候不会显示，但其实是输入进去了。

执行下面的命令可以查看安装的所有的发行版

```bash
wsl --list -v
```

### 转移到D盘

安装的时候会默认安装到C盘，久而久之C盘空间就会爆满，下面将其转移到D盘。

首先执行下面的命令，创建一个文件夹

```bash
mkdir D:\WSL\Ubuntu-24.04
```

然后需要导出Ubuntu24.04为.tar文件

```bash
wsl --export Ubuntu-24.04 D:\WSL\Ubuntu-24.04\Ubuntu-24.04.tar
```

这会下载Ubuntu-24.04并将其导出到D:\WSL\Ubuntu-24.04\Ubuntu-24.04.tar，然后可以执行下面的命令查看Ubuntu-24.04.tar已经成功导出。

```bash
ls D:\WSL\Ubuntu-20.04
```

取消注册原有的Ubuntu-24.04，如果你已经安装了Ubuntu-20.04（默认在C盘），可以将其从WSL注销：

```bash
wsl --unregister Ubuntu-24.04
```

运行以下命令，将Ubuntu-24.04重新导入到D:\WSL\Ubuntu-20.04：

```bash
wsl --import Ubuntu-24.04 D:\WSL\Ubuntu-24.04 D:\WSL\Ubuntu-24.04\Ubuntu-24.04.tar --version 2
```

在D:\WSL\Ubuntu-24.04目录下，WSL2发行版的文件存储在一个虚拟磁盘映像文件（ext4.vhdx）中，该文件用于存储整个Ubuntu-24.04文件系统

导入完成后，你可以启动 WSL：

```bash
wsl -d Ubuntu-24.04
```