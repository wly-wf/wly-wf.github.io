---
title: Windows 11安装WSL2及简单配置
date: 2026-4-14
update: 2026-4-18
categories: 教程
tags:
  - Windows
  - WSL2
---

今天记录一下如何在Windows11系统上安装WSL2，并将其从默认安装位置C盘转移到D盘，然后对其进行简单配置。

## 前置准备

### CPU虚拟化

首先需要检查电脑是否开启了CPU虚拟化功能，可以打开任务管理器并选择性能选项卡，在CPU界面的右下角可以看到**虚拟化**，如果显示是已启用，说明CPU虚拟化已开启。如果未开启，需要进入电脑的bios进行开启，具体开启方法请自行搜索教程。

<!-- more -->

### 启用Windows功能

然后需要开启两项功能：**适用于Linux的Windows子系统**、**虚拟机平台**。虚拟机平台在某些电脑上可能会显示为英文。

方法一：

在开始界面搜索**功能**，找到**启用或关闭Windows功能**并打开，开启上述两项功能。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/Windows-func.webp)

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

## WSL的简单配置

新安装的Ubuntu24.04已经默认自带了git和vim工具，因此我们可以很方便的从GitHub上拉取仓库以及进行文件的编辑。

### 安装OpenCode

在如今的时代，AI已经非常强大了，为了辅助我们安装，建议先安装一个AI编程助手，比较有名的有[Claude Code](https://claude.com/product/claude-code)、[Codex](https://github.com/openai/codex)。但是我今天推荐的是一个开源AI编程助手：[OpenCode](https://opencode.ai)，它可以很方便地配置不同的提供商的模型。

首先我们安装curl工具。在Ubuntu终端中输入：

```bash
sudo apt update && sudo apt upgrade -y
```
更新一下包管理器。然后安装curl。

```bash
sudo apt install -y curl
```

安装完这个之后，我们可以输入下面的命令来安装OpenCode：

```bash
curl -fsSL https://opencode.ai/install | bash
```

### 简单配置

安装完成之后，我们在工作文件夹下输入opencode就可以开始使用了

首先输入/connect，可以选择大模型的提供商，我们这里选择DeepSeek，然后在[DeepSeek开放平台](https://platform.deepseek.com)上获取一个API Key，输入后就可以开始使用了。输入/models可以选择不同的模型，这里选择DeepSeek Chat。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/opencode-connect.webp)

然后我们就可以跟它对话了，让它帮助我们操作。首先我们先让它帮我们安装一下[nvm](https://github.com/nvm-sh/nvm)，这是前端和Node.js开发者最常用的工具。它的作用就是可以在同一台电脑上安装、切换和管理多个Node.js版本，避免不同项目因Node版本不同而产生依赖冲突。

正常来说，它会去自动帮我们安装好。当然，我们也可以自己手动安装，在终端中输入下面的命令，其中v0.40.4是目前nvm的最新版本：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

我们可以输入下面的命令来查看是否安装成功：

```bash
nvm --version
```

> 注意：以下操作都可以让opencode帮你完成，下面介绍手动操作。

然后我们安装Node.js最新LTS版本（长期支持版）

```bash
nvm install --lts
```

输入下面的命令查看版本

```bash
node --version
```

### 终端美化

由于我自己是一个追求好看的人，下面的部分仅供参考。

首先安装一下zsh，zsh是一种Unix shell，它兼容bash，但提供了更强大的交互功能和扩展性。

```bash
sudo apt install -y zsh
```

然后安装一下ohmyzsh，这个社区框架功能非常强大。

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

然后设置zsh为默认的shell：

```bash
sudo -S chsh -s $(which zsh) $USER
```

然后我们安装几个必装的插件。

1、powerlevel10k（主题）

输入：

```zsh
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
```

将模板复制到我们的zshrc中，输入

```zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

输入下面命令来安装powerlevel10k:

```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
```

然后在 ~/.zshrc 中修改：

```zsh
ZSH_THEME="powerlevel10k/powerlevel10k"
```

保存后输入下面的命令使配置生效

```zsh
source ~/.zshrc
```

然后会自动进入powerlevel10k的主题配置阶段，它会问你一些问题，你选择你喜欢的类型就可以了。

2、zsh-autosuggestions（命令补全）以及zsh-syntax-highlighting（语法高亮）

zsh-autosuggestions会根据你的命令历史记录和补全内容，在你输入命令时，以灰色文字在光标后显示建议的命令。zsh-syntax-highlighting会在你输入命令的同时实时进行语法高亮显示。

输入下面命令安装zsh-autosuggestions：

```zsh
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

输入下面命令安装zsh-syntax-highlighting：

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

然后在.zshrc中修改：

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/zshrc-plugins.webp)

然后重新加载.zshrc的配置

```zsh
source ~/.zshrc
```

上面的操作都可以让OpenCode帮忙操作，可以自行实践

### 迁移

在安装zsh之前，我们安装了nvm和OpenCode，但是我们现在切换到了zsh，因此我们需要将这两个东西迁移到zsh中，这样才可以在zsh中使用

只需要把~./bashrc中的nvm和OpenCode配置复制到zsh中可以了。

nvm：

```zsh
# nvm configuration
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

OpenCode：

```zsh
# opencode
export PATH=/home/wly/.opencode/bin:$PATH
```

如果只想在zsh中使用，想清除bash的配置的话，可以直接删除原来的配置。