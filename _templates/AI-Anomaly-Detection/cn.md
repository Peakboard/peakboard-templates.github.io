---
layout: article
title: 快人一步 —— 如何利用人工智能（AI）避免缺陷产品的生产
description: 
  - 模板使用Azure Cloud中的AI模型探测生产异常。出现异常情况时，生产出缺陷产品的概率会极大地提高。为此，模板采用JSON数据源，将测量出的两个数值输送给AI模型，并进行异常检测。这些数值作为体现生产质量的指标，能让您及时探测并由此避免不良产品的生产。看板会以负值的形式进行展示，简单易懂，一目了然；然后，员工和同事就可以立即独自地处理，从而避免生产缺陷部件。马上免费下载看板，节省生产时间和成本！
lang: cn
weight: 1700
isDraft: false
ref: AI-Anomaly-Detection
category:
  - Production
  - Maintenance
image: AI-Anomaly-Detection.png
image_thumbnail: AI-Anomaly-Detection_thumbnail.png
download: AI-Anomaly-Detection_CN.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# 如何使用

模板使用的AI模型来自[Paiqo](https://paiqo.com/de/)。该模型在Azure cloud中运行。

模板通过脚本模拟两个测量值，并将其“喂”给模型。在实际生产环境中，这两个数值将来自于传感器。模型接收到数值之后，就会计算出一个异常评级，并将其返回至看板并展示出来；从而帮助用户快速找出问题并进行先期处置，完全避免超出允许偏差的部件。
