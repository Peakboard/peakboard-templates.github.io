---
layout: article
title: Dein Teamboard für ein effizientes Shopfloormeeting
description: 
  - This template serves as an interactive dashboard for manual operational data acquisition in quality control. Through a touchscreen display, workers can interact with the dashboard and make entries on the items inspected. If an item is without defects, the worker can log this by pressing the "OK" button. If an item is faulty, the error can be specified in more detail using the corresponding buttons.
  - Based on this data, the dashboard provides your employees with an overview of their own and neighboring production lines. Thanks to the real-time visualization, they also see immediately if a certain error has become disproportionately frequent. This allows them to react quickly and optimize the corresponding production process immediately.
  - All the data collected through the touchscreen is stored and persisted in a list in Peakboard Hub. This allows you to use the data not only for a real-time overview, but also for historical analysis. The long-term analysis can be performed either via [this](https://templates.peakboard.com/Overview-Quality-Control/en) dashboard or using a BI tool such as Power BI, Tableau or Click.
  - Download the template now for free and customize it to your individual needs or your company's corporate design. For even easier usability, all scripts in this template were created using Peakboard Building Blocks, our low-code script editor.
lang: de
weight: 1000
isDraft: true
ref: Shopfloor-Teammeeting-Board
category:
  - Alle
  - Shopfloor
  - Interaktion
image: Shopfloor-Teambesprechung-Board.png
image_thumbnail: Shopfloor-Teambesprechung-Board_thumbnail.png
download: Shopfloor-Teambesprechung-Board.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# mögliche datenquellen
Dieses Template verwendeten eine Peakboard Hub Liste als zentrale Datenquelle. Die Daten, die mithilfe einer an die Peakboard Box angeschlossenen Maus und Tastatur erfasst werden, werden dabei in eine Peakboard Hub Liste geschrieben, die dann für die Datenvisualisierung ausgelesen wird. Alternativ können hierfür andere Datenbanken wie SQL, Oracle oder ODBC genutzt werden. Auch die Namen der Teammitglieder sind in einer Liste im Peakboard Hub gespeichert.

# so funktioniert's
Um dieses Template vollumfänglich nutzen zu könnten, benötigst du Peakboard Hub. Wie du diesen installierst, erfährst du [hier](https://help.peakboard.com/hub/de-hub_installation.html). Öffne Peakboard Hub, wähle im Menü “Lists” und klicke auf "Import", um die benötigte Tabellenstruktur zu importieren. Diese kannst du <a href="QualityData.txt" class="inline" download>hier</a> herunterladen. 

![](img/peakboard-hub-lists.png)

Das Feld "Name" solltest du mit “QualityData” ausfüllen und darunter die zuvor heruntergeladene Datei wählen.

![](img/peakboard-hub-import-list.png)

 Öffne nun den Peakboard Designer und [stelle eine Verbindung zu Peakboard Hub](https://help.peakboard.com/hub/de-hub_connectpbdesigner.html) her. Öffne nun dieses Template im Peakboard Designer und gehe erneut in die Peakboard Hub Einstellungen unter Projekt/Project > Peakboard Hub.

 ![](img/peakboard-designer-hub-settings.png)

Klicke auf den “Überschreiben” Button, um die Peakboard Hub Connection des Templates mit deinen eigenen Anmeldedaten zu überschreiben.

 ![](img/peakboard-designer-overwrite-credentials.png)

 Nun ist alles bereit und das Template schreibt die erfassten Daten in die angelegte Liste im Peakboard Hub.
