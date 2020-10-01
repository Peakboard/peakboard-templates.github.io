---
layout: article
title: Gastronomie Bestellsystem – Bestellung von Getränken und Snacks direkt am Tisch mit einem Touchscreen
description: 
  - Dieses Template bieten die Möglichkeit an jedem Tisch einen Tisch mit Hilfe eines Touchscreens zu bestellen. Quasi eine digitale Speisekarte. Dies bietet eine unkomplizierte Möglichkeit ein Bestellsystem zu etablieren und weitere Services könnten angebunden werden. Aktuell wird die eingegebe Bestellung einfach an eine E-Mail Adresse versand, ganz einfach. Getränke, Speisen und Preise einfach anpassen, Monitor aufstellen und schon kann es los gehen.
lang: de
weight: 800
isDraft: true
ref: Bar-Table-Order-Touchscreen
category:
  - Interaktion
  - Sonstiges
image: Bar-Table-Order-Touchscreen.png
image_thumbnail: Bar-Table-Order-Touchscreen_thumbnail.png
download: Bar-Table-Order-Touchscreen.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# mögliche datenquellen

Dieses Template verwendet einfache Variablenlisten als Datenquelle. Variablenlisten ist die Möglichkeit zum speichern von einfachen Parametern direkt auf der Box. Man könnte diese Visualisierung aber auch auf viele andere Arten erstellen und andere Datenquellen, welche einfacher zu verwalten sind verwenden. Zum Beispiel würde sich hier auch eignen: JSON, XML, CSV, ODBC, Microsoft SQL Server, MS Access, MySQL, Microsoft Excel, Google Docs / Spreadsheet, Microsoft SharePoint Listen und [vieles mehr](https://peakboard.com/datenanbindungen/).

# so funktioniert's

Passe die Variable 'MailReceiver' unter Variables an und trage deine E-Mail ein. An diese Adresse wird nun jede Bestellung verschickt sobald jemand auf 'Order' klickt. Mit Hilfe der Variablenlisten 'Products0', 'Products1', 'Products2' und 'Products3' kannst du die gewünschten Produkte inklusive Preise hinterlegen. Mit der Variablen 'TableNumber' kannst du noch für jeden Screen eine individuelle Tischnummer vergeben. 

![](img/change-email-variable.png)

Bei mehreren Bildschirmen macht es natürlich umso mehr Sinn die Getränke und Speisen über eine zentrale Datenquelle, zum Beispiel einer Excel in einem Cloud-Dienst abzulegen und zu verwalten.



Hintergrundbild [designed by Mrsiraphol / Freepik](http://www.freepik.com)