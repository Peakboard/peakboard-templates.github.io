---
layout: article
title: Echtzeit Andon Board - Effektive Überwachung deiner Produktion aus der Vogelperspektive
description: 
  - Dieses Andon Board zeigt deine Produktionshalle aus der Vogelperspektive und visualisiert den aktuellen Status jeder deiner Maschinen anhand einer Andon-Ampel in Echtzeit. Grün signalisiert, dass die Maschine in Betrieb ist, gelb bedeutet, dass die Maschine gerade gerüstet wird und rot weist auf einen Fehler hin. Im Falle eines Fehlers wird dessen Grund zusätzlich direkt angezeigt. So kannst du Abweichungen und Störungen sofort erkennen und zeitnah auf Probleme reagieren, was zu einer höheren Produktivität und einer besseren Qualität deiner Produktion führt.
  - Darüber hinaus speichert die Anwendung alle aufkommenden Fehler in eine Peakboard Hub Liste. Die persistieren Daten werden im rechten Bereich des Dashboards angezeigt. Hier werden sowohl die kürzlich aufgetretenen Probleme als auch die Gesamtzahl der Vorfälle am jeweiligen Tag angezeigt.
  - Mittels eines Touchscreens oder einer an die Peakboard Box angeschlossene Maus kann auf die Kacheln im rechten unteren Bereich geklickt werden. Darauf hin öffnet sich ein Fenster, welches eine detaillierte Fehlerliste und Analyse der jeweiligen Maschine anzeigt. Durch die kontinuierliche Überwachung, Dokumentation und Analyse der Fehler lassen sich Ursachen identifizieren und langfristige Verbesserungen im Produktionsprozess erzielen.
  - Lade dir das Template jetzt kostenlos herunter und passe es ohne Programmieraufwand auf die Produktionsumgebung deines Unternehmens an. Für eine noch einfachere Bedienbarkeit wurden alle Skripte in diesem Template mit Peakboard Building Blocks, unserem Low-Code-Skripteditor, erstellt. 
lang: de
weight: 1000
isDraft: true
ref: Floorplan-Andon-Board
category:
  - Alle
  - Shopfloor
  - Andon
  - Produktion
  - Peakboard Hub
  - OPC UA
image: Hallenplan-Andon-Board.png
image_thumbnail: Hallenplan-Andon-Board_thumbnail.png
download: Hallenplan-Andon-Board.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# mögliche datenquellen

Dieses Template verwendet OPC UA als Datenquelle. Du kannst stattdessen auch andere maschinennahe Kommunikationsmethoden wie: MQTT, Siemens S7, Azure Event & IoT Hub, Werma, Mitsubishi Electric, Beckhoff Automation, Bosch IoT Gateway, Rockwell Automation oder MT Connect anbinden. Die auftretenden Fehler werden in eine Peakboard Hub Liste gespeichert und von dort für das Dashboard ausgelesen. Alternativ können hierfür andere Datenbanken wie SQL, Oracle oder ODBC genutzt werden. Ebenfalls wird eine Peakboard Hub Liste mit den Fehlercodes und Fehlerbeschreibung jeder Maschine verwendet. Um dieses Template mit deinem eigenen Peakboard Hub zu nutzen, kannst du <a href="ErrorsList.txt" class="inline" download>hier</a> die Tabellenstruktur der Fehlerliste und <a href="ErrosMapping.txt" class="inline" download>hier</a> die der Fehlercodes herunterladen. Importiere diese in deinen Peakboard Hub und passe anschließend die Datenquellen im Template entsprechend an.

# detailanalyse im pop-up fenster

Mit einem Klick auf eine Kachel kannst du eine detaillierte Fehlerübersicht der entsprechenden Maschine öffnen: 
![image_live](Hallenplan-Andon-Board-PopUp.png)

