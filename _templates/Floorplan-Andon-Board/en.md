---
layout: article
title: Real-time andon board – Effective monitoring of your production from a bird's eye view 
description: 
  - This andon board provides a bird’s eye view of your production facility and uses an andon traffic light to visualize the current status of each of your machines in real time. Green shows that the machine is running, yellow means that the machine is being configured, and red indicates an error. In the event of an error, the reason for it is also displayed directly. This way, you can immediately identify deviations and malfunctions and react to problems swiftly, which leads to higher productivity and better quality in your production.
  - In addition, the application saves all occurring errors in a Peakboard Hub list. The persistent data is displayed in the right pane of the dashboard. This shows both the recent issues and the total number of incidents for that day.
  - Using a touchscreen or a mouse connected to the Peakboard Box, you can click on the tiles in the lower right area. This opens a window displaying a detailed list of errors and analysis of the respective machine. The continuous monitoring, documentation, and analysis of errors let you identify the causes and achieve long-term improvements in the production process.
  - Download the template now for free and adapt it to your company's production environment without any programming effort. For even easier usability, all scripts in this template were created with Peakboard Building Blocks, our low-code script editor. 
lang: en
weight: 580
isDraft: false
ref: Floorplan-Andon-Board
category:
  - All
  - Shopfloor
  - Andon
  - Production
  - Peakboard Hub
  - OPC UA
image: Floorplan-Andon-Board.png
image_thumbnail: Floorplan-Andon-Board_thumbnail.png
download: Floorplan-Andon-Board.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# possible data sources
This template uses OPC UA as the source of the machine data. You can use other low-level communication methods instead, such as: Connect MQTT, Siemens S7, Azure Event & IoT Hub, Werma, Mitsubishi Electric, Beckhoff Automation, Bosch IoT Gateway, Rockwell Automation, or MT Connect. Any errors that occur are saved in a Peakboard Hub list and read out from there to the dashboard. As an alternative, you can use other databases for this, such as SQL, Oracle, or ODBC. The template also uses a Peakboard Hub list with the error codes and error description of each machine. To use this template with your own Peakboard Hub, you can download the table structure of the error list <a href="ErrorsList.txt" class="inline" download>here </a> and the error codes <a href="ErrorsMapping.txt" class="inline" download>here</a>. Import these into your Peakboard Hub and then adjust the data sources in the template accordingly.

# detailed analysis in pop-up window
You can click a tile to open a detailed error overview for the corresponding machine:
![image_live](Floorplan-Andon-Board-PopUp.png)
