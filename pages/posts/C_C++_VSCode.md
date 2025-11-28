---
title: VSCode利用WSL配置C/C++环境
date: 2025-10-25
update: 2025-10-25
categories: 教程
tags:
  - 编程
  - C/C++
---

很多人在刚开始学习编程语言的时候，比如C、C++、Python等，一般都是跟着网上的教程，用的是IDE（集成开发环境），比如说[Visual Studio](https://visualstudio.microsoft.com/zh-hans/)、[Dev C++](http://www.bloodshed.net/)、[PyCharm](https://www.jetbrains.com/pycharm/)等。这些IDE的好处就是不用我们自己配置麻烦的编译链接环境，它们直接帮你搞好了，写完代码按编译运行按钮就可以看到结果，很方便。但是这样也有坏处，我们不能深入底层了解程序的编译链接过程，往往这些原理才是更重要的。

在这里推荐一下[Visual Studio Code](https://code.visualstudio.com/)这款开源的编辑器，虽说它只是一个编辑器，但是它拥有庞大的拓展插件，你可以通过各种插件来实现不同的功能，比如说你可以用它写C/C++，写Python，写Java等等，只要合理配置，它的功能非常强大，这也是这款软件受到大家的喜爱的原因。但是恰恰是它的环境配置对于小白来说有点困难，所以也劝退了很多刚入门的新手。

最近研究了一下怎么在VSCode上配置C/C++的编程环境，确实有点麻烦，想把它记录下来。

<!-- more -->

## 前言

### 安装VSCode

首先进入VSCode的下载页面：https://code.visualstudio.com/Download
根据不同的系统选择对应的版本进行下载安装，需要注意的是安装过程的这个界面需要把这几个全勾上，其中其他里面的前两个的作用是：你可以在一个文件夹中单击右键，选择用VSCode打开这个文件夹。然后就是要把最后一个勾上。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/VSCode%E5%AE%89%E8%A3%85.webp)

安装完成之后，我们打开软件会发现界面都是英文的，我们可以安装一个中文插件进行汉化。按`Ctrl+Shift+X`打开拓展页面，就在左边从上往下数第四个，搜索**Chinese**，安装简体中文插件，安装完成后，右下角提示我们要重启软件使插件生效，重启后软件就变成中文的了。

### 配置前的准备

虽然VSCode提供了数量庞大的插件，我们可以安装各种各样的插件来实现我们的要求，但是到后面，我们的软件会充斥着大量的插件，如果管理不当，这些插件还有可能会互相影响，导致一些奇奇怪怪的bug。而我们平常学习或者是做项目的时候，一般只会用到一种或者几种编程语言和工具，那我们能不能把不同工作场景所需的插件单独拿出来分类，比如说写C语言项目的时候只用了C语言相关的插件，写Python的时候只用到Python相关的插件，这样就不会影响了。

巧的是VSCode提供了这个功能，它的名字叫做**配置文件**，点击左下角的齿轮图标，然后就可以看到配置文件了，刚开始我们就只有一个默认配置文件，我们可以新建配置文件，然后我们就可以获得一个全新的配置环境了，我们命名为C/C++，然后可以发现刚刚安装的中文插件不见了，这是因为不同的配置文件是独立的，我们可以基于此来配置不同的环境。

> 我们还可以把一些常用的插件设置成所有配置文件，比如说刚刚的中文插件，这样就不用重复安装了

### 浅谈环境变量

环境变量是一种变量，跟编程语言里面的变量是类似的。假设一下这个场景，你的电脑桌面上有一个名为hello.exe的可执行文件，路径为`"C:\Users\admim\Desktop\hello.exe"`，这时候你在桌面打开命令行，输入hello.exe，这时候终端就会开始运行这个程序了。但是如果hello.exe在桌面的一个名为test的文件夹内，路径为`"C:\Users\admim\Desktop\test\hello.exe"`，这个时候你在输入hello.exe时，终端就会报错显示：无法将“hello.exe”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。

这是由于终端会现在当前目录下寻找目标程序，就刚刚的例子来说，它会先在桌面找有没有一个叫hello.exe的程序，如果没有找到，那么它会继续去系统环境变量中去找，你会发现环境变量中几乎都是一些路径什么的，它就会去这些路径里一个一个找，找到了就执行。因此如果你在环境变量中添加一个路径`"C:\Users\admim\Desktop\test\"`，这个时候不管你在哪个路径下打开终端，输入hello都可以运行。

环境变量可以类似于编程语言中的全局变量，所有函数都可以访问到。

> 你可以通过“开始菜单->搜索‘编辑系统环境变量’”查看环境变量

## 安装编译调试工具

我们编写的代码计算机是看不懂的，必须使用编译工具编译链接成可执行文件，计算机才能运行出结果，而VSCode本身是一个编辑器，没有自带编译工具，所以这就需要我们手动安装了。

常见的编译工具链有：

**[MinGW-w64](https://www.mingw-w64.org/)**：它是一个GNU工具链（GCC）的Windows发行版，提供GCC编译器，可以在Windows上编写、编译和链接C, C++, Fortran程序。

**[MSYS2](https://www.msys2.org/)**：它是一个 基于Cygwin和MinGW-w64的类Unix环境和软件发行版。其内部集成了MinGW-w64工具链（通常有多个版本，例如 mingw-w64-x86_64-gcc），因此也可以在 MSYS2 环境中用MinGW-w64编译原生的Windows程序。但它同时也可以编译MSYS2自己的类Unix程序。

这里我们选择安装MSYS2。进入[下载地址](https://github.com/msys2/msys2-installer/releases)，选择下载最新版本。

安装完成后，在开始菜单打开MSYS2 UCRT64命令行，请确保你能看到**UCRT64**字样，代表你在正确的环境中。然后输入以下命令来更新Pacman包管理器：

```bash
pacman -Syu
```

然后输入以下命令安装GCC（包含G++）和GDB：

```bash
pacman -S mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-gdb
```

安装完成后，你可以通过运行以下命令来验证 gcc、g++ 和 gdb 是否已正确安装并且可以在 UCRT64 终端中使用：

```bash
gcc --version
g++ --version
gdb --version
```

你应该会看到每个工具的版本信息：

```bash
gcc.exe (Rev8, Built by MSYS2 project) 15.2.0
Copyright (C) 2025 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

g++.exe (Rev8, Built by MSYS2 project) 15.2.0
Copyright (C) 2025 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

GNU gdb (GDB) 16.3
Copyright (C) 2024 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

最后将`D:\msys64\ucrt64\bin\`这个路径添加到系统环境变量中，这样后面VSCode就可以找到了。

## 利用.json文件编译调试单文件

### settings.json文件

### launch.json文件

### tasks.json文件

## 利用CMake编译调试多文件

C/C++ 项目通常包含大量的源文件（.c, .cpp）、头文件（.h, .hpp）以及可能需要链接的第三方库。手动编写编译命令（如 g++ main.cpp foo.cpp -o my_app -I/path/to/headers -L/path/to/libs -lmylib）会非常繁琐且容易出错。CMake 通过编写简洁的 CMakeLists.txt 文件，自动生成适合你当前开发环境的构建脚本，从而自动化了源代码的编译、链接等步骤。

### 安装CMake

首先需要去[CMake官网](https://cmake.org/)下载安装CMake，可以直接下载压缩包，你应该可以看到一个名为**cmake-4.2.0-rc1-windows-x86_64.zip**的压缩包，下载之后把它解压缩放在一个路径下面就可以了。打开文件夹你会发现有一个bin的目录，假设为`D:\CMake\bin`，将这个路径添加到系统环境变量中。然后打开命令行，输入：

```bash
cmake --version
```

查看版本信息，若能正确输出则说明成功安装。

### CMakeLists.txt文件

`CMakeLists.txt`文件在CMake项目中扮演着核心角色，它是构建系统（build system）的“蓝图”或“指令集”。简单来说，它告诉CMake如何生成（generate）和组织（organize）构建工程文件，以便后续通过实际的编译器（如GCC/Clang/MSVC）来编译源代码。这对我们编译多文件C/C++程序非常友好。

### VSCode配置

首先安装插件**C/C++**和**C/C++ Extension Pack**，一般来说，安装完**C/C++ Extension Pack**这个插件，会顺带自动安装一些别的插件，比如说**C/C++ Themes**、**CMake Tools**，我们还需要安装**CMake**这个插件，然后就可以了。

假设你的项目如下：

```text
project/
├── .vscode
    └── launch.json     // 调试用，建议自己新建并复制下面的代码
├── inc/                // 头文件
    ├── hello.h
    └── world.h
├── src/                // 源文件
    ├── hello.c
    ├── world.c
    └── main.c
└── CMakeLists.txt      // 构建文件
```

## 结语
