---
layout: article
title: frühzeitige erkennung von problemen mit hilfe eines KI modells
description: 
  - Dieses Template verwendet ein KI-Modell in der Azure Cloud um zu erkennen, wann eine Anomalie entsteht und so die Wahrscheinlichkeit für eine Fehlproduktion steigt. Es werden 2 Messwerte an ein KI-Modell übermittelt und mit Hilfe der JSON Datenquelle erhält man eine Anomalie-Bewertung als Wert zurück. Mit diesem Wert kann man die aktuelle Situation schnell ersichtlich machen und so frühzeitig reagieren um Fehlproduktion komplett zu vermeiden. Sobald negative Werte auftreten zeigt das Board dies deutlich an und Mitarbeiter können schnell reagieren bevor Fehlteile entstehen.
lang: de
weight: 1700
isDraft: false
ref: AI-Anomaly-Detection
category:
  - Produktion
  - Instandhaltung
image: Anomalie-Erkennung-mit-KI.png
image_thumbnail: Anomalie-Erkennung-mit-KI_thumbnail.png
download: Anomalie-Erkennung-mit-KI.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# so funktioniert's

Dieses Template verwendet ein AI Modell der Firma [Paiqo](https://paiqo.com/de/). Dieses Modell läuft in der Azure Cloud.

Es werden 2 Messwerte simuliert mit einem Script und an das Modell gesendet. In einem realen Szenario wären dies zwei Werte von Sensoren. Sobald das Modell die Werte erhält kalkuliert es einen Wert für die Anomalie-Bewertung und gibt diesen Wert an das Board zurück. Dieser wird dann angezeigt und hilft, schnell Probleme zu erkennen und frühzeitig zu reagieren um Fehlteile, die außerhalb der Toleranz sind, komplett zu vermeiden.