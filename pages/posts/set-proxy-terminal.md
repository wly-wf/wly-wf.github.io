---
title: 为终端设置代理
date: 2026-01-29
update: 2026-01-29
categories: 教程
tags:
  - 技巧
  - 代理
---

在平常使用代理软件访问国外网站的时候，明明浏览器已经可以自由访问，下载资源也没有问题，但是打开终端执行`git clone`、`npm install`等时依然龟速或者超时，原因在于系统代理和终端环境的运行逻辑存在“断层”。

当你点击代理软件的“设为系统代理”时，它实际上只是在系统设置里修改了几个注册表项或系统参数。现代浏览器会主动去读取系统的这些参数，并按照指定的协议发送请求。大多数终端（CMD, PowerShell, Zsh, Bash）以及在其中运行的命令行工具（curl, wget, git）是高冷的，它们在设计之初为了保证稳定性，默认不会主动寻找系统的代理设置，而是直接通过底层网络接口发送请求。终端工具判断是否需要走代理，通常只认一个东西：**环境变量**。 如果你的环境变量里没有明确写着 http_proxy 或 https_proxy，命令行工具就会认为你处于直连网络。

<!-- more -->

### 代理软件的几种模式

#### 基础路由模式（决定流量去向）

**规则模式**：软件根据内置的“分流规则图谱”进行判断。访问国内网站（如百度、淘宝）时走直连；访问国外被屏蔽的网站（如 Google、GitHub）时走代理。兼顾访问速度与隐私，节省代理流量，且不影响国内 App 的定位和速度。

**全局模式**：强迫电脑的所有请求（无论目标是哪）都经过代理服务器。即使你访问百度，流量也会绕道国外的服务器再回来。适合规则失效时紧急使用，或者需要完全隐藏 IP 地址的场景。缺点是访问国内网站速度变慢，且可能导致部分国内银行/视频 App 无法使用。

**直连模式**：绕过代理软件，所有流量直接通过你的本地宽带。相当于关闭了代理功能，但不退出软件。

#### 流量抓取模式（决定拦截能力）

**系统代理（默认方式）**：普通的代理模式通常只针对支持系统代理设置的程序（如浏览器）。很多游戏、命令行工具或特定的桌面 App 会无视系统代理，导致你开了代理它们依然连不上网。

**TUN 模式（或者虚拟网卡模式）**：在系统中虚拟出一张网卡（TUN 接口）。它在三层（网络层）拦截流量。由于它是系统层面的“虚拟网卡”，所有进出电脑的 IP 包都会经过它。接管能力极强。能解决那些“不听话”软件的上网问题，特别适合玩外服游戏或在终端下载依赖。

### 为终端设置代理

下面讲一下如何为终端配置代理，分为临时设置和通过配置文件配置，具体是什么端口可以去代理软件里面查询。

#### 临时配置

**CMD**

```bat
set HTTP_PROXY=http://127.0.0.1:7897
set HTTPS_PROXY=http://127.0.0.1:7897
set NO_PROXY=localhost,127.0.0.1,::1
```

**PowerShell**

```powershell
$Env:HTTP_PROXY = "http://127.0.0.1:7897"
$Env:HTTPS_PROXY = "http://127.0.0.1:7897"
$Env:NO_PROXY = "localhost,127.0.0.1,::1"
```

**MSYS2 / Git Bash / Linux Shell / Unix Shell**

```bash
export HTTP_PROXY="http://127.0.0.1:7897"
export HTTPS_PROXY="http://127.0.0.1:7897"
export NO_PROXY="localhost,127.0.0.1,::1"
```

#### 通过配置文件配置

这里以Windows上的PowerShell为例进行说明。首先需要创建配置文件，可以通过下面的命令进行创建

```powershell
New-Item -ItemType Directory -Path "$([System.Environment]::GetFolderPath("MyDocuments"))\WindowsPowerShell"
New-Item -ItemType File -Path "$([System.Environment]::GetFolderPath("MyDocuments"))\WindowsPowerShell\Microsoft.PowerShell_profile.ps1"
```

运行后将在 C:\User\YourUserName\Documents\WindowsPowerShell 这个路径创建一个 Microsoft.PowerShell_profile.ps1 文件，这是 PowerShell 的配置文件，可以在里面编写函数。

然后需要解锁 PowerShell 运行脚本的限制，再运行一下下面的命令

```powershell
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```

然后打开刚才创建的配置文件，复制下面的代码

```powershell
function global:Set-Proxy {
    param (
        $proxy_value
    )

    # 1. Check if user provided a specific proxy address
    if ([string]::IsNullOrEmpty($proxy_value)) {
        # 2. If not, try to auto-detect from system registry
        $internet_setting = Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings"
        if ($internet_setting.ProxyEnable -ne 1) {
            Write-Host "System proxy is OFF. Please specify address (e.g., Set-Proxy http://127.0.0.1:7897)" -ForegroundColor Red
            return
        }

        $proxy_addr = $($internet_setting.ProxyServer)
        if (($proxy_addr -match "http=(.*?);") -or ($proxy_addr -match "https=(.*?);")) {
            $proxy_value = $matches[1]
            $proxy_value = $proxy_value.ToString().Replace("http://", "").Replace("https://", "")
            $proxy_value = "http://${proxy_value}"
        } elseif ($proxy_addr -match "socks=(.*)") {
            $proxy_value = $matches[1]
            $proxy_value = $proxy_value.ToString().Replace("http://", "").Replace("https://", "")
            $proxy_value = "socks://${proxy_value}"
        } else {
            $proxy_value = "http://${proxy_addr}"
        }
    }

    # 3. Set the Environment Variables
    $Env:NO_PROXY = "localhost,127.0.0.1,::1"
    $Env:HTTP_PROXY = $proxy_value
    $Env:HTTPS_PROXY = $proxy_value
    Write-Host "Proxy SET: $Env:HTTP_PROXY" -ForegroundColor Green
}

function global:Unset-Proxy {
    # 4. Remove Environment Variables (Logic Fixed)
    if (-not [string]::IsNullOrEmpty($Env:HTTP_PROXY)) {
        Remove-Item -Path Env:HTTP_PROXY -Force
    }
    if (-not [string]::IsNullOrEmpty($Env:HTTPS_PROXY)) {
        Remove-Item -Path Env:HTTPS_PROXY -Force
    }
    if (-not [string]::IsNullOrEmpty($Env:NO_PROXY)) {
        Remove-Item -Path Env:NO_PROXY -Force
    }
    Write-Host "Proxy CLEARED" -ForegroundColor Yellow
}
```

然后保存即可，PowerShell的配置需要用UTF-8编码进行保存，我们可以用VSCode打开这个文件进行保存，可以点击右下角的编码类型，然后选择通过编码保存，如果你全是英文和数字的话，直接保存就可以了。

最后在PowerShell中运行下面命令使其生效。

```powershell
. $PROFILE
```

当你想在终端中开启代理时，可以输入Set-Proxy，该函数会自动从注册表中读取你的代理端口，前提是你的代理软件需要开启代理。想要关闭代理时，输入Unset-Proxy即可。你也可以自己手动指定代理地址。

```powershell
Set-Proxy http://127.0.0.1:7897
```

如果使用的是其他终端，可以把PowerShell的代码给ai，让它教你如何配置。