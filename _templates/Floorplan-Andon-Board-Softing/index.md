---
layout: article
title: Softing Echtzeit Andon Board – Effektive Überwachung deiner Produktion aus der Vogelperspektive
description: 
  - Dieses Andon Board zeigt deine Produktionshalle aus der Vogelperspektive und visualisiert den aktuellen Status jeder deiner Maschinen anhand einer Andon-Ampel in Echtzeit. Grün signalisiert, dass die Maschine in Betrieb ist, gelb bedeutet, dass die Maschine gerade gerüstet wird und rot weist auf einen Fehler hin. Im Falle eines Fehlers wird dessen Grund zusätzlich direkt angezeigt. So kannst du Abweichungen und Störungen sofort erkennen und zeitnah auf Probleme reagieren, was zu einer höheren Produktivität und einer besseren Qualität deiner Produktion führt.
  - Darüber hinaus speichert die Anwendung alle aufkommenden Fehler in eine Peakboard Hub Liste. Die persistieren Daten werden im rechten Bereich des Dashboards angezeigt. Hier werden sowohl die kürzlich aufgetretenen Probleme als auch die Gesamtzahl der Vorfälle am jeweiligen Tag angezeigt.
  - Mittels eines Touchscreens oder einer an die Peakboard Box angeschlossene Maus kann auf die Kacheln im rechten unteren Bereich geklickt werden. Daraufhin öffnet sich ein Fenster, welches eine detaillierte Fehlerliste und Analyse der jeweiligen Maschine anzeigt. Durch die kontinuierliche Überwachung, Dokumentation und Analyse der Fehler lassen sich Ursachen identifizieren und langfristige Verbesserungen im Produktionsprozess erzielen.
  - Lade dir das Template jetzt kostenlos herunter und passe es ohne Programmieraufwand an die Produktionsumgebung deines Unternehmens an. Für eine noch einfachere Bedienbarkeit wurden alle Skripte in diesem Template mit Peakboard Building Blocks, unserem Low-Code-Skripteditor, erstellt. 
lang: de
weight: 579
isDraft: false
ref: Floorplan-Andon-Board-Softing
category:
  - Alle
  - Shopfloor
  - Andon
  - Produktion
  - Peakboard Hub
  - OPC UA
  - Partner
  - Softing
image: Hallenplan-Andon-Board-Softing.png
image_thumbnail: Hallenplan-Andon-Board-Softing_thumbnail.png
download: Hallenplan-Andon-Board-Softing.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# Verwendete Datenquellen

Dieses Template verwendet OPC UA als Quelle der Maschinendaten. Es eignet sich daher optimal für das Zusammenspiel mit der Lösung von [Softing](https://peakboard.com/softing/). Der OPC UA Server von Softing erfasst und standardisiert Daten aus einem breiten Spektrum von SPS-Herstellern und sammelt diese zentralisiert. Insbesondere für größere Produktionsumgebungen erweist sich ein OPC UA Server als äußerst sinnvoll, weil man so die Nachfragelast minimiert, da Peakboard nur auf den zentralen Server anstatt auf einzelne Maschinensteuerungen zugreifen muss. Ebenfalls wird eine Peakboard Hub Liste mit den Fehlercodes und Fehlerbeschreibung jeder Maschine verwendet. Um dieses Template mit deinem eigenen Peakboard Hub zu nutzen, kannst du <a href="ErrorsList.txt" class="inline" download>hier</a> die Tabellenstruktur der Fehlerliste und <a href="ErrorsMapping.txt" class="inline" download>hier</a> die der Fehlercodes herunterladen. Importiere diese in deinen Peakboard Hub und passe anschließend die Datenquellen im Template entsprechend an.



