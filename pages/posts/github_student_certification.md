---
title: GitHub学生认证（白嫖GitHub Copilot）
date: 2025-11-24
update: 2025-11-24
categories: 教程
tags:
  - Github
  - Copilot
---

为了能在VSCode上美美用上Copilot，同时解决认证过程中可能遇到的问题，遂写下这篇文章。

参考了这篇博客的方法：https://zhaojianjun2004.github.io/2025/09/16/github_student/

## 前期准备

1、**[FastGithub](https://gitee.com/XingYuan55/FastGithub)**，这个用来加速GitHub，不能使用代理软件，至少最后一步拍照的时候不能使用，为了方便，建议下载一个这个，这个不会改变ip。根据自己的系统下载对应的版本即可。

参考的博客建议下载一个iriun webcam，电脑可以调用手机摄像头，为了后面拍照的时候更加方便，我实测发现用电脑的前置摄像头也可以。

<!-- more -->

2、**学生邮箱**：可以在自己学校官网申请一个，然后进入GitHub首页 -> 点击右上角头像的`Settings` -> `Emails`，添加这个学生邮箱。

3、**完善Payment information**：进入GitHub首页 -> 点击右上角头像的`Settings` -> `Billing and licensing` -> `Payment information`，填写好对应的信息，如下图所示。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/GitHub_payment.png)

4、**个人信息**：先在手机备忘录准备好以下信息

``` text
Student Verification Report
Name:
School:
Student ID:
Study Form: Distance learning
Validate Until: 07/2026
```

其中`Name`填上面Payment information中的名字（拼音），`School`填学校英文名，`School ID`填自己的学号，`Study Form`这里填的是远程学习，为了应对我们不在学校的时候定位不准，`Validate Until`填自己的预计毕业时间。以上信息可以在手机备忘录中写好，将字体放大一点，方便后面的拍照。

## 开始申请

进入GitHub首页 -> 点击右上角头像的`Settings` -> `Billing and licensing` -> `Education benefits`，点击绿色按钮`start an application`，进入界面后，选择角色为Student，下面填写自己学校的英文名称选择自己的学校，然后填写自己的学生邮箱，最后点击`Share Location`，给GitHub定位权限，然后点击`continue`。

然后进入拍照验证环节，我们选择第一个验证方式：`Dated school ID - Good`，然后我们将手机备忘录中填写好的信息放大，对准电脑的摄像头，拍照之前可能看起来是镜像，但是点击拍照后就会正过来，不用担心，我们只需要保证我们的信息在图片中间并且能够看清上面的内容，因为GitHub的机器验证应该是用的OCR，来识别图片中的信息，所以拍照的时候一定要清楚。

然后进入下一步，我们可能会由于定位不准出现下面的问题：Why are you not on campus?

我们选择第二个原因：`All coursework is via distance learning`，然后还需要提交一次证明材料，和前面的方式一样，我们在手机备忘录中填写以下信息：

```text
Student xxx（姓名和前面保持一致）,is allowed to study via distance learning in xxx（学校英文名字，和前面保持一致）
```

拍照上传即可。

到这里就基本上完成了，然后等个两三分钟的样子，刷新，就可以看到显示`Approved`，那就成功了，然后等三天人工验证，就可以通过学生认证，通过的话会给你的邮箱发一封邮件，邮箱就是申请的时候填的学生邮箱，然后就可以白嫖Copilot了。可以看到我第一次申请失败了，我是用手持学生证拍照的方式，没通过，没有识别出我的学校名字，所以还是建议直接在备忘录中填好。

![](https://image-wlyblog-1370229696.cos.ap-guangzhou.myqcloud.com/img/GitHub_edu.png)