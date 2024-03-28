---
layout: article
title: English Headline
description: 
  - English Description
lang: en
weight: 681
isDraft: true
ref: Floorplan-Energy-Monitoring
category:
  - All
  - Shopfloor
  - Production
  - Peakboard Hub
  - OPC UA
image: Floorplan-Energy-Monitoring.png
image_thumbnail: Floorplan-Energy-Monitoring_thumbnail.png
download: Floorplan-Energy-Monitoring.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# possible data sources
This template uses OPC UA as the source of the machine data. You can use other low-level communication methods instead, such as: Connect MQTT, Siemens S7, Azure Event & IoT Hub, Werma, Mitsubishi Electric, Beckhoff Automation, Bosch IoT Gateway, Rockwell Automation, or MT Connect. Any errors that occur are saved in a Peakboard Hub list and read out from there to the dashboard. As an alternative, you can use other databases for this, such as SQL, Oracle, or ODBC. The template also uses a Peakboard Hub list with the error codes and error description of each machine. To use this template with your own Peakboard Hub, you can download the table structure of the power consumption list <a href="Consumption.txt" class="inline" download>here </a>. Import these into your Peakboard Hub and then adjust the data sources in the template accordingly.