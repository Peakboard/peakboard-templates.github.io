---
layout: article
title: gastronomie bestellsystem – bestelle getränke und snacks direkt am tisch mit einem touchscreen
description: 
  - This template makes it possible to provide a touchscreen on every table within a bar or restaurant and let customers order with a simple touch. All orders will then be sent to a given e-mail address.
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

Dieses Template verwendet einfache Variablenlisten als Datenquelle. Variablenlisten ist die Möglichkeit zum speichern von einfachen Parametern direkt auf der Box. Man könnte diese Visualisierung aber auch auf viele andere Arten erstellen und andere Datenquellen, welche einfacher zu verwalten sind verwenden. Zum Beispiel würde sich hier auch eignen: JSON, XML, CSV, ODBC, Microsoft SQL Server, MS Access, MySQL, Microsoft Excel, Google Docs / Spreadsheet, Microsoft SharePoint Listen und vieles mehr.

# so funktioniert's

Passe die Variable 'MailReceiver' unter Variables an und trage deine E-Mail ein. An diese Adresse wird nun jede Bestellung verschickt sobald jemand auf 'Order' klickt. Mit Hilfe der Variablenlisten 'Products0', 'Products1', 'Products2' und 'Products3' kannst du die gewünschten Produkte inklusive Preise hinterlegen. Mit der Variablen 'TableNumber' kannst du noch für jeden Screen eine individuelle Tischnummer vergeben. 

![](img/change-email-variable.png)

Bei mehreren Bildschirmen macht es natürlich umso mehr Sinn die Getränke und Speisen über eine zentrale Datenquelle, zum Beispiel einer Excel in einem Cloud-Dienst abzulegen und zu verwalten.