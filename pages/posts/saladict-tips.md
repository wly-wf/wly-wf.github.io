---
title: 沙拉查词使用技巧
date: 2025-8-10
update: 2025-8-10
categories: 教程
tags:
  - 英语
  - 技巧
---

分享一个翻译的神器。

这类工具其实有很多，比较好用的一般就是[**沉浸式翻译**](https://immersivetranslate.com)这个浏览器插件了，但最近又被爆出来会泄露用户数据。这次分享的一个神器是[**沙拉查词**](https://saladict.crimx.com)。

<!-- more -->

> **视频教程：https://www.bilibili.com/video/BV1ki4y1x7EN**

## 安装

这个其实也是浏览器的一个插件，适配Edge、Chrome、Firefox等常用浏览器。

> Edge浏览器插件下载地址：[**沙拉查词-聚合词典划词翻译**](https://microsoftedge.microsoft.com/addons/detail/沙拉查词聚合词典划词翻译/idghocbbahafpfhjnfhpbfbmpegphmmp)

## 配置

安装完成后，需要进行基本的设置，进入浏览器的插件页面，点击沙拉查词右边三个点，选择扩展选项进入**沙拉查词**的配置界面

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E9%85%8D%E7%BD%AE%E9%A1%B5%E9%9D%A2.webp)

可以按照下面配置：

**基本选项**：开启**启用划词翻译、开启后台保持运行**

**单词管理**：勾选所有上下文翻译引擎

**情景模式**：每种模式相当于一套不同的设置，可以根据需要增加或删除模式

**查词面板**：自定义查词面板，查词面板支持自己添加CSS。可按照下面代码设置，个人觉得还是挺好看的。

（感谢开源：https://github.com/crimx/ext-saladict/discussions/2210）

```css
/* 参考 Custom Theme [自定义主题] 极简主题 Nexmoe #1567 */
.menuBar {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    padding: 8px;
}

.menuBar-SearchBox_Wrap {
    padding-right: 5px;
    padding-left: 5px;
}

.menuBar-SearchBox {
    color: rgba(242, 104, 0);
    background-color: #eee;
    padding: 8px 10px;
    border-radius: 20px;
    font-weight: bold;
}

.menuBar-Btn_Icon-fav,
.menuBar-Btn_Icon-history {
    stroke: #222;
}

.menuBar-Btn_Icon {
    fill: #000;
}

.menuBar-Btn_Icon-fav.isActive {
    fill: rgba(242, 104, 0, .5);
    stroke: rgba(242, 104, 0);
    stroke-width: 6%;
}

.mtaBox-TextArea-Wrap,
.mtaBox-DrawerBtn,
.waveformBox.saladict-external,
.dictItemHead-Logo {
    display: none;
}

.dictItem {
    padding: 0 10px;
}

.dictItem:first-child {
    padding-top: 10px;
}

.dictItem-Body {
    padding: 0 15px;
}

.dictItemHead {
    background: #eee;
    border-radius: 6px;
    padding: 6px;
    height: auto;
}

.dictPanel-Root {
    box-shadow: rgba(0, 0, 0, 0.2) 0 7px 21px 2px;
}

.isAnimate .menuBar-Btn,
.isAnimate .menuBar-Btn-dir {
    border-radius: 6px;
}

/* 剑桥词典排版 */

/* title模块 */
.pos-header.dpos-h {
    padding: 15px 0;
}

/* title-英文单词 */
.hw.dhw {
    font-size: 30px;
    padding: 20px 0 20px;
}

/* title-词性tag行*/
.posgram.dpos-g.hdib.lmr-5 {
    padding: 10px 0 8px 0;
}

/* title-词性tag */
.pos.dpos {
    border: solid 2px #F26800;
    border-radius: 10px;
    padding: 1px 3px 1px;
    background-color: rgba(242, 104, 0, .3);
}

span.irreg-infls.dinfls {
    padding: 5px 4px 1px;
}

/* 帮助不大的元素 */
.dwl.hax,
.dbtn,
.daccord {
    display: none;
}

/* 词义模块 */
.pr.dsense {
    padding: 0 0 0 15px;
    border-left: solid 3px;
    border-color: rgba(242, 104, 0, .8);
    margin: 10px 0 30px 0;
}

/* 词义-英文 */
.ddef_h {
    font-size: 16px;
    font-weight: bold;
    background-color: #f7f7f7;
    padding: 10px;
}

/* 词性英文 */
.dsense_h {
    font-size: 15px;
    color: #34675C;
    padding: 5px 0 10px;
}

/* 词义-中文释义 */
.def-body.ddef_b .dtrans {
    text-decoration: underline wavy 2px;
    text-decoration-color: rgba(242, 104, 0, .6);
    font-size: 16px;
    font-weight: bolder;
    color: #000000;
}

/* 例句-模块 */
.def-body.ddef_b {
    padding: 10px 0;
}

/* 例句-英文字体 */
.eg.deg {
    color: #7d7d7d;
    font-size: 15px;
}

/* 例句-中文字体 */
.examp.dexamp .trans.dtrans.dtrans-se.hdb.break-cj {
    color: #c2c2c2;
    font-size: 12px;
    background-color: transparent;
    text-decoration: none;
}

/* 补充内容-模块 */
.pr.phrase-block.dphrase-block {
    padding: 10px 10px;
    margin: 10px 0;
    border: 1px dashed #A3CCAB;
}

/* 补充内容-短语英文 */
.phrase-head.dphrase_h {
    font-size: 18px;
    color: rgba(242, 104, 0);
    padding: 10px 0;
}

.xref.see_also.hax.dxref-w {
    padding: 10px 0;
}

/* 同义词等其他-模块 */
.xref.synonyms.hax.dxref-w.lmt-25,
.xref.synonym.hax.dxref-w.lmt-25,
.xref.synonyms.hax.dxref-w,
.xref.idioms.hax.dxref-w.lmt-25.lmb-25,
.xref.idiom.hax.dxref-w.lmt-25.lmb-25,
.xref.phrasal_verb.hax.dxref-w.lmt-25.lmb-25,
.xref.phrasal_verbs.hax.dxref-w.lmt-25.lmb-25,
.xref.phrasal_verbs.hax.dxref-w.lmt-25.lmb-25,
.xref.related_words.hax.dxref-w.lmt-25,
.xref.related_word.hax.dxref-w.lmt-25.lmb-25,
.xref.grammar.hax.dxref-w.lmt-25.lmb-25,
.xref.grammars.hax.dxref-w.lmt-25.lmb-25,
.xref.opposites.hax.dxref-w,
.xref.opposite.hax.dxref-w,
.xref.compare.hax.dxref-w {
    padding: 20px 10px;
    margin: 5px 0;
    border: 2px dashed;
    border-color: rgba(242, 104, 0, .5);
    background-color: rgba(242, 104, 0, .05) !important;
}

/* 同义词等-大标题 */
strong.xref-title.dxref-t {
    font-size: 20px;
    color: rgba(242, 104, 0);
}

.item.lc.lc1.lc-xs6-12.lpb-10.lpr-10 {
    padding: 3px 0;
}

/* 同义词-用词 */
span.x-lab.dx-lab {
    padding: 0 6px 0;
}

/* 同义词-用词地区 */
span.region {
    color: #75b381;
    font-size: 12px;
    border: solid 1px #A3CCAB;
    border-radius: 5px;
    padding: 1px 1.5px 1px;
}

/* 同义词-用词场合 */
.usage {
    color: #F26800;
    font-size: 12px;
    border: solid 1px #F26800;
    border-radius: 10px;
    padding: 1px 1.5px 1px;
}

/* 同义词-单词 */
span.x-h.dx-h {
    font-size: 15px;
    font-weight: bold;
}

/* 同义词-单词补充 */
span.x-num.dx-num {
    font-size: 10px;
}
```

**查词习惯**：取消勾选**鼠标悬停查词**

**词典设置**：可以自己添加词典

**词典账号**：随着沙拉查词用户增多，如经常使用机器翻译，建议到官网申请帐号以获得更稳定的体验以及更准确的结果。不弄也是可以的。

**快捷查词**：开启**独立窗口**

**权限管理**：开启**读取剪贴板、写入剪贴板**

其他设置可以保持默认，如果有需要可以自己探索。设置到这里，就可以愉快的使用沙拉查词插件翻译浏览器中选中的内容了。但是为了使用体验更好，可以对浏览器再次进行设置。

具体方法如下：打开浏览器右上角三个点->进入设置->外观->其他外观设置->上下文菜单->**关闭**选中文本时显示迷你菜单

不关闭迷你菜单的效果：

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E4%B8%8D%E5%85%B3%E9%97%AD%E8%BF%B7%E4%BD%A0%E8%8F%9C%E5%8D%95.webp)

> 迷你菜单指的是黑框内的内容

此时迷你菜单会遮挡住沙拉查词，下面是关闭迷你菜单后的效果

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%85%B3%E9%97%AD%E8%BF%B7%E4%BD%A0%E8%8F%9C%E5%8D%95.webp)

当你选中文本时，鼠标右上角会出现一个沙拉查词的图标，点击后可以查看翻译的结果，如下所示。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E7%A4%BA%E6%84%8F%E5%9B%BE.webp)

你可以选择不同的翻译模式，同时也可以将翻译结果钉在界面上，就可以愉快的查单词啦！

## 浏览器外查词

前面只是基本功能，其强大之处其实在于它可以在浏览器外查词，甚至翻译英文论文，体验比知云翻译好得多。建议配合自己的阅读器使用，不要使用浏览器自带的阅读器。

> **教程：https://github.com/crimx/ext-saladict/discussions/493**

### 配置方法

首先进入浏览器的插件设置界面：**点击管理扩展->键盘快捷方式**

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E9%94%AE%E7%9B%98%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F%E8%AE%BE%E7%BD%AE.webp)

找到沙拉查词的快捷键设置部分，并为**在独立窗口中搜索剪贴板内容**设置快捷键，我设置的是Alt+L。同时要将应用范围选择为**全局**

然后在沙拉查词设置中开启**后台保持运行**（前面已经设置）

下面要安装捷径软件**Quicker**

> **地址：https://getquicker.net**

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/quicker.webp)

点击立即下载，选择对应操作系统的版本进行安装即可。

接下来安装**文本/截图动作**

在Quicker主页的搜索框搜索[**文本/截图动作**](https://getquicker.net/sharedaction?code=b0d1a134-8284-4a44-d1be-08d746da5869)，点击复制到剪贴板，然后点击鼠标中键，呼出Quicker面板，并在空白处单击右键，选择粘贴分享的动作，点击安装即可。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%AE%89%E8%A3%85%E5%8A%A8%E4%BD%9C.webp)

如果你不想单击鼠标中键呼出Quicker，也可以打开Quicker的设置界面，点击弹出面板，并选择你自己喜欢的呼出方式。例如我选择的就是长按鼠标右键呼出。你也可以在右边的按键测试区测试快捷键。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%91%BC%E5%87%BA%E6%96%B9%E5%BC%8F.webp)

### 使用教程

完成上面的配置后，就差不多可以开始使用了。首先它包含4种强大的翻译方式：文本截图、划词翻译、复制翻译、触边翻译

长按右键呼出面板，在文本/截图翻译动作上单击右键，可以看到一些功能，如下所示。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD.webp)

#### 文本截图

**使用方法：**

1、选中文本，长按右键呼出面板，在文本/截图翻译动作上单击右键，选择文本截图，则翻译选中的文本

2、未选中文本，长按右键呼出面板，在文本/截图翻译动作上单击右键，选择文本截图，则手动截图选择文本翻译

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E6%96%87%E6%9C%AC%E6%88%AA%E5%9B%BE.gif)

#### 划词翻译

**使用方法：**

长按右键呼出面板，在文本/截图翻译动作上单击右键，选择划词翻译，此时右下角会出现划词翻译的运行框，双击选中文本或者划动选中文本即自动翻译

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91.gif)

#### 复制翻译

**使用方法：**

长按右键呼出面板，在文本/截图翻译动作上单击右键，选择复制翻译，此时右下角会出现复制翻译的运行框，复制文本即自动翻译

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/%E5%A4%8D%E5%88%B6%E7%BF%BB%E8%AF%91.gif)

#### 触边翻译

**使用方法：**

1、选中文本，长按右键呼出面板，在文本/截图翻译动作上单击右键，选择触边翻译，此时右下角会出现触边翻译的运行框，鼠标移动至左边缘即可自动翻译

2、未选中文本，长按右键呼出面板，在文本/截图翻译动作上单击右键，选择触边翻译，此时右下角会出现触边翻译的运行框，鼠标移动至左边缘，触发文本截图翻译

## 总结

以上就是最为基础的玩法，更多进阶玩法可以自己去官网或者GitHub了解。利用好这个翻译神器，不仅对学习英语很有帮助，而且为科研党读英文文献提供了巨大的便利。

>**视频教程：https://www.bilibili.com/video/BV1ki4y1x7EN**
>
>**沙拉查词主页：https://saladict.crimx.com**
>
>**GitHub仓库地址：https://github.com/crimx/ext-saladict**
>
>**文字版教程：https://github.com/crimx/ext-saladict/discussions/493**
