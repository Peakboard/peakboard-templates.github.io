---
layout: article
title: Barcode scanner with Peakboard Edge to get meta information
description: 
  - This template shows, how you can use a scanner connected to Peakboard Edge to obtain information from other sources. Each employee has a Peakboard Edge and a scanner. When a product is scanned, the metadata is pulled from another data source. The example uses an Excel file, but it could also be information from SQL, SAP, etc.
lang: en
weight: 425
isDraft: false
ref: Edge-Barcode-Scanner-Info
category:
  - All
  - Interaction
  - Edge
image: Edge-Barcode-Scanner-Info.png
image_thumbnail: Edge-Barcode-Scanner-Info_thumbnail.png
download: Edge-Barcode-Scanner-Info.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# possible data sources

This template uses the Peakboard Edge data source. Peakboard Edge can directly input and output information about external devices. Peakboard Edge does not communicate via a display, but is always connected to a Peakboard Box. [Here you can learn more about Peakboard Edge](https://help.peakboard.com/scripting/en-variables.html). The numbers scanned by Peakboard Edge can then be used to retrieve data about an order from another system. This template works with an Excel file, in your scenario an ERP system such as: abas ERP, proALPHA ERP, Epicor ERP, Comarch ERP, QAD Adaptive ERP, MS Dynamics AX Axapta, MS Dynamics NAV or SAP would be possible. Here you can find an overview of [possible interfaces](https://peakboard.com/en/interfaces/).


# how it works

![image_live](edge-use-case-scanner-logistics.gif)
