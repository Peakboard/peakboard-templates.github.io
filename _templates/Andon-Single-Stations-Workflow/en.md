---
layout: article
title: andon single station workflow overview
description: 
  - This template gives you an overview of several workstations to react quickly to possible problems at a single station. This template can be used in production (make-to-order production) and in assembly.
lang: en
weight: 1000
isDraft: true
ref: Andon-Single-Stations-Workflow
category:
  - Andon
  - Production
  - Job Production
image: Andon-Single-Stations-Workflow.png
image_thumbnail: Andon-Single-Stations-Workflow_thumbnail.png
download: Andon-Single-Stations-Workflow.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# possible data sources
This template uses Peakboard [variable lists](https://help.peakboard.com/scripting/en-variables.html) as data source. For your Use Case you can of course use your systems. Here the communication could also take place between different boxes. Just add another Peakboard Box as data source and simply read variables or variable lists from this box. Peakboard Edge would also be an option here, with Peakboard Edge you could easily connect analog systems and bring data into the digital world. 

Of course you can also use existing infrastructure and read out machine data via MQTT, OPC UA, Siemens S7, Werma, Mitsubishi Electric or your MES connection. Many MES are supported. Among others: FORCAM FORCE, AIS Automation FabEagle MES, camLine InFrame Synapse MES, MPDV MES HYDRA or [many more](https://peakboard.com/en/product/peakboard-versions/#dataconnections).