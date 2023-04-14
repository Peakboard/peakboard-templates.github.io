---
layout: article
title: Real-time Andon Board - Effective monitoring of your production from a bird's eye view
description: 
  - This interactive digital bulletin board clearly displays all important information and key production figures relating to your production. In addition, the application not only allows you to create but also edit shift schedules for your team for the current and the coming week. All employees can be assigned a shift, workstation, and an order to be processed for each business day. The digital production dashboard is operated either with a touchscreen or with a mouse and keyboard, which is easy to connect to the Peakboard Box.
  - This digital solution also makes having to physically print out and post important notices or the weekly menu a thing of the past. With Peakboard, just load the PDF documents to be displayed on a network drive, SharePoint, or OneDrive, for example. You can easily swap out the files to be displayed as needed. The digital bulletin board will then update the display fully automatically.
  - Download the template now and customize it to your individual needs without any IT effort or previous knowledge. Our [consulting team](https://peakboard.com/produkt/consulting/) would also be happy to assist.
lang: en
weight: 1000
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
This template uses OPC UA as source of the machine data. You can also use other machine-related communication methods instead like: MQTT, Siemens S7, Azure Event & IoT Hub, Werma, Mitsubishi Electric, Beckhoff Automation, Bosch IoT Gateway, Rockwell Automation or MT Connect. The errors that occur are stored in a Peakboard Hub list and read from there for the dashboard. Alternatively, other databases such as SQL, Oracle or ODBC can be used for this purpose. Also a Peakboard Hub list with the error codes and error description of each machine is used. To use this template with your own Peakboard Hub, you can download the table structure of the error list <a href="ErrorsList.txt" class="inline" download>here </a> and the error codes <a href="ErrorsMapping.txt" class="inline" download>here</a>. Import them into your Peakboard Hub and then adjust the data sources in the template accordingly.


# pop-up for detailed analysis
With a click on one of the tiles you can open a detailed error overview of the corresponding machine:
![image_live](Floorplan-Andon-Board-PopUp.png)
