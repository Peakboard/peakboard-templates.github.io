---
layout: article
title: Operational data acquisition made easy - your interactive dashboard for quality control
description: 
  - This template serves as an interactive dashboard for manual operational data acquisition in quality control. Through a touchscreen display, workers can interact with the dashboard and make entries on the items inspected. If an item is without defects, the worker can log this by pressing the "OK" button. If an item is faulty, the error can be specified in more detail using the corresponding buttons.
  - Based on this data, the dashboard provides your employees with an overview of their own and neighboring production lines. Thanks to the real-time visualization, they also see immediately if a certain error has become disproportionately frequent. This allows them to react quickly and optimize the corresponding production process immediately.
  - All the data collected through the touchscreen is stored and persisted in a list in Peakboard Hub. This allows you to use the data not only for a real-time overview, but also for historical analysis. The long-term analysis can be performed either via the dashboard itself or using a BI tool such as Power BI, Tableau or Click.
  - Download the template now for free and customize it to your individual needs or your company's corporate design. For even easier usability, all scripts in this template were created using Peakboard Building Blocks, our low-code script editor.
lang: en
weight: 1000
isDraft: true
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
# possible data sources
This template uses a Peakboard Hub list as the central data source. The data collected using the touchscreen is written to a Peakboard Hub list, which is then read out for the data visualization. Alternatively, you can use other databases such as SQL, Oracle or ODBC for this purpose.

# how it works
Um dieses Template vollumfänglich nutzen zu könnten, benötigst du den Peakboard Hub. Wie du diesen installierst, erfährst du [hier](https://help.peakboard.com/hub/de-hub_installation.html). Öffnen den Peakboard Hub, wähle im Menü “Lists” und klicke auf den "Import" Button um die benötigte Tabellenstruktur zu importieren. Diese kannst du hier <a href="QualityData.txt" class="inline" download>hier</a> herunterladen. 

![](img/peakboard-hub-lists.png)

Das Feld "Name" solltest du mit “QualityData” ausfüllen und darunter die zuvor heruntergeladene Datei selektieren.

![](img/peakboard-hub-import-list.png)

 Öffne nun den Peakboard Designer und stelle wie [hier](https://help.peakboard.com/hub/de-hub_connectpbdesigner.html) erklärt, eine Verbindung zum Peakboard Hub her. Öffne nun dieses Template im Peakboard Designer und gehe erneut in die Peakboard Hub Einstellungen unter Projekt/Project > Peakboard Hub.

 ![](img/peakboard-designer-hub-settings.png)

Klicke auf den “Überschreiben/Overwrite” Button um die Hub Connection des Templates mit deinen eigenen Anmeldedaten zu überschreiben.

 ![](img/peakboard-designer-overwrite-credentials.png)

 Nun ist alles Bereit und das Template schreibt die erfassten Daten in die angelegte Liste im Peakboard Hub.
