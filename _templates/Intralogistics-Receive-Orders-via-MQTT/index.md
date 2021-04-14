---
layout: article
title: intralogistik – bestellungen empfangen über MQTT
description: 
  - Dieses Template stellt Bestellungen die auf einer anderen Peakboard Box über MQTT aufgegben wurden dar. So hat man immer die Übersicht, welche Bestellungen noch offen sind.
lang: de
weight: 1800
isDraft: true
ref: Intralogistics-Receive-Orders-via-MQTT
category:
  - Logistik
  - Lager
  - Interaktion
image: Intralogistik-Bestellungen-Empfangen-ueber-MQTT.png
image_thumbnail: Intralogistik-Bestellungen-Empfangen-ueber-MQTT_thumbnail.png
download: Intralogistik-Bestellungen-Empfangen-ueber-MQTT.pbmx
---

# mögliche datenquellen

Bei diesem Template wird die Kommunikation zwischen den verschiedenen Screens über MQTT gelöst. Man könnte auch anderen Kommunikationswege verwenden oder die Daten in eine Datenbank schreiben wie z.B. ODBC, MS SQL Server, Oracle, MySQL, PostgreSQL, MongoDB und [viele mehr](https://peakboard.com/datenanbindungen/).

# verwandtes template

Dieses Template funktioniert in Verbindung mit [diesem Template](https://templates.peakboard.com/Intralogistics-Order-Parts-with-MQTT/de). Welche die Bestellungen aufnimmt und darstellt.