---
layout: article
title: Operational data acquisition made easy - your interactive dashboard for quality control
description: 
  - This template serves as an interactive dashboard for manual operational data acquisition in quality control. Through a touchscreen display, workers can interact with the dashboard and make entries on the items inspected. If an item is without defects, the worker can log this by pressing the "OK" button. If an item is faulty, the error can be specified in more detail using the corresponding buttons.
  - Based on this data, the dashboard provides your employees with an overview of their own and neighboring production lines. Thanks to the real-time visualization, they also see immediately if a certain error has become disproportionately frequent. This allows them to react quickly and optimize the corresponding production process immediately.
  - All the data collected through the touchscreen is stored and persisted in a list in Peakboard Hub. This allows you to use the data not only for a real-time overview, but also for historical analysis. The long-term analysis can be performed either via [this](https://templates.peakboard.com/Overview-Quality-Control/en) dashboard or using a BI tool such as Power BI, Tableau or Click.
  - Download the template now for free and customize it to your individual needs or your company's corporate design. For even easier usability, all scripts in this template were created using Peakboard Building Blocks, our low-code script editor.
lang: en
weight: 591
isDraft: false
ref: Interactive-Board-Manual-Quality-Control
category:
  - All
  - Production
  - Shopfloor
  - Interaction
image: Interactive-Board-Manual-Quality-Control.png
image_thumbnail: Interactive-Board-Manual-Quality-Control_thumbnail.png
download: Interactive-Board-Manual-Quality-Control.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# Possible data sources
This template uses a Peakboard Hub list as the central data source. The data collected using the touchscreen is written to a Peakboard Hub list, which is then read out for the data visualization. Alternatively, you can use other databases such as SQL, Oracle or ODBC for this purpose.

# How it works
You can find detailed instructions for this template in this YouTube video.
{% include video.html image='EN-YT-Thumb.png' video_id='BG0MsmiOYHk' %}

To be able to use this template to its full extent, you need Peakboard Hub. You can find out how to install it [here](https://help.peakboard.com/hub/de-hub_installation.html). Open Peakboard Hub, select "Lists" in the menu and click on the "Import" button to import the required table structure. You can download it <a href="QualityData.txt" class="inline" download>here</a>.

![](img/peakboard-hub-lists.png)

Fill in the "Name" field with "QualityData" and select the previously downloaded file.

![](img/peakboard-hub-import-list.png)

 
 Next, open the Peakboard Designer and setup a connection to Peakboard Hub as explained [here](https://help.peakboard.com/hub/de-hub_connectpbdesigner.html). Now open this template within the Peakboard Designer and go back to the Peakboard Hub settings under Project > Peakboard Hub.

 ![](img/peakboard-designer-hub-settings.png)

Click on "Overwrite" to replace the Peakboard Hub Connection of the template with your own credentials.

 ![](img/peakboard-designer-overwrite-credentials.png)

 Now you are ready and the template automatically writes the collected data to the created list in Peakboard Hub.
