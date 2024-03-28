---
layout: article
title: Headline Deutsch
description: 
  - Beschreibung
lang: de
weight: 681
isDraft: true
ref: Floorplan-Energy-Monitoring
category:
  - Alle
  - Shopfloor
  - Produktion
  - Peakboard Hub
  - OPC UA
image: Hallenplan-Energie-Verbrauch-Monitor.png
image_thumbnail: Hallenplan-Energie-Verbrauch-Monitor_thumbnail.png
download: Hallenplan-Energie-Verbrauch-Monitor.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# mögliche datenquellen

Dieses Template verwendet OPC UA als Quelle der Maschinendaten. Du kannst stattdessen auch andere maschinennahe Kommunikationsmethoden wie: MQTT, Siemens S7, Azure Event & IoT Hub, Werma, Mitsubishi Electric, Beckhoff Automation, Bosch IoT Gateway, Rockwell Automation oder MT Connect anbinden. Die auftretenden Fehler werden in eine Peakboard Hub Liste gespeichert und von dort für das Dashboard ausgelesen. Alternativ können hierfür andere Datenbanken wie SQL, Oracle oder ODBC genutzt werden. Ebenfalls wird eine Peakboard Hub Liste mit den Fehlercodes und Fehlerbeschreibung jeder Maschine verwendet. Um dieses Template mit deinem eigenen Peakboard Hub zu nutzen, kannst du <a href="ErrorsList.txt" class="inline" download>hier</a> die Tabellenstruktur der Fehlerliste und <a href="ErrorsMapping.txt" class="inline" download>hier</a> die der Fehlercodes herunterladen. Importiere diese in deinen Peakboard Hub und passe anschließend die Datenquellen im Template entsprechend an.
