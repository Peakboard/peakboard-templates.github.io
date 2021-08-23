---
layout: article
title: 生产分析看板 —— 连接FORCAM FORCE™的车间概览
description: 
  - 该看板提供单个车间生产进程的详细概览。它使用FORCAM FORCE™数据源 —— FORCAM为工业物联网（IIOT）打造的IT平台。它通过FORCAM FORCE™ Bridge API获取生产数据，并融合其他参数，例如每小时速率和单价，获得完整的订单状态概览并实时监控车间运行。此外，当出现由机器故障导致的损失，您也可以了然于胸。该模板能帮助您优化进程，从而提高利润率。 
lang: cn
weight: 1800
isDraft: false
ref: Forcam-Costs-Overview
category:
  - All
  - Forcam
  - Production
image: Forcam-Costs-Overview_CN.png
image_thumbnail: Forcam-Costs-Overview_CN_thumbnail.png
download: Forcam-Costs-Overview_CN.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# 如何使用

首先，调整调用[FORCAM API](https://docs.forcebridge.io/)的JSON URL，将看板连至FORCAM系统。对于全部的五次调用，重复该步骤。'Current_Times' (3)目前处于不可用状态，因为它需要另一个调用的操作ID，然后才能执行该操作。

![](img/forcam-call-url.png)

随后，调整授权方式，输入URL、客户ID和客户密匙。您可将预先设置的FORCAM授权用于随后的FORCE Bridge API调用。

![](img/forcam-oauth-update.png)

第三步，修改参数。注明您想展示哪一车间的状态，并输入机器或车间的每小时速率和单位成本。当然，您也可以从不同系统中获取这些数值。模板使用的是比较简单的变量。

![](img/forcam-workplace-and-prices.png)

使用触摸屏或鼠标与键盘随时修改车间编号，即使其正在运行，从而查看其他车间状态。只需点击文本区域，输入新的车间编号，然后点击按钮确认。如果您不需要该功能，可移除此按钮，并将输入部分转换为常见的文本区域。

![](img/forcam-cost-overview-live-edit.png)
