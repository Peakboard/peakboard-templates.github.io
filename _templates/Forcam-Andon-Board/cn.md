---
layout: article
title: 采用富勘FORCE™ bridge API的富勘安东板
description: 
  - 在生产领域，安东板通常用作车间监控工具，对组装线或生产系统的生产状态进行可视化处理。该模板通过连接富勘FORCE™ —— 富勘为工业物联网（IIOT）设计的IT平台，轻松地优化了生产进程。看板实时可视化展示了三个工作站。进程数据以及设备总体效率（OEE）数据均通过富勘FORCE™ bridge API获取，并可视化在安东板上。
lang: cn
weight: 1800
isDraft: false
ref: Forcam-Andon-Board
category:
  - 所有
  - Forcam
  - 生产制造
  - 安东板
  - OEE
image: Forcam-Andon-Board_CN.png
image_thumbnail: Forcam-Andon-Board_CN_thumbnail.png
download: Forcam-Andon-Board_CN.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# 如何使用

该模板采用FORCAM FORCE™ [Bridge API](https://docs.forcebridge.io/)。

调整每个API调用系统的URL（一共有九个API调用指令）。

![](img/forcam-edit-json-call-url.png)

第二步，调整授权方式、凭证URL、客户ID和客户密匙。如果您想创建新调用，可以选择预先设置的FORCAM授权方式。

![](img/forcam-edit-authentication.png)

最后，调整“工作站编号”变量，输入三个您想在看板上展示的工作站。

![](img/forcam-edit-workplace-number.png)
