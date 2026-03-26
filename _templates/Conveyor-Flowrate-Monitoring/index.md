---
layout: article
title: Bandwaagen Monitoring – Verfolge deinen Materialfluss in Echtzeit
description:
  - Dieses Template bietet eine übersichtliche Visualisierung zur Überwachung von Förderbandwaagen, wie sie beispielsweise in Steinbrüchen oder der Rohstoffverarbeitung eingesetzt werden. Es ermöglicht die Anzeige zentraler Kennzahlen wie aktueller Fördermenge, Bandgeschwindigkeit oder Gewicht und schafft so Transparenz über den laufenden Materialfluss.

  - Neben den aktuellen Werten bietet das Dashboard eine Monatsansicht, in der die Fördermengen pro Tag übersichtlich dargestellt werden. Dadurch lassen sich Entwicklungen im Zeitverlauf nachvollziehen sowie Schwankungen oder Auffälligkeiten schnell erkennen und bewerten.

  - Das Template entstand in Zusammenarbeit mit dem Bandwaagenhersteller [MTS](https://www.mts-waagen.de/de/index.html) und basiert auf praxisnahen Anforderungen aus der Industrie. Es eignet sich ideal für Unternehmen, die ihre Förderprozesse überwachen, Leistungsdaten transparent darstellen und fundierte Entscheidungen auf Basis aktueller und historischer Tageswerte treffen möchten.

lang: de
weight: 664
isDraft: true
ref: Conveyor-Flowrate-Monitoring
category:
  - Alle
  - Interaktion
  - Conveyor
  - Hardware
image: Foerdermengen-Monitoring.png
image_thumbnail: Foerdermengen-Monitoring_thumbnail.png
video: Foerdermengen-Monitoring.mp4
download: Foerdermengen-Monitoring.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---


# Mögliche Datenquellen
Die Bandwaagen von MTS kommunizieren über eine Modbus-Schnittstelle, über die Messwerte direkt ausgelesen werden können. In diesem Template wird jedoch mit Demodaten in Form von Variablenlisten gearbeitet, sodass es ohne Anbindung und Hardware sofort genutzt werden kann. Alternativ zur Modbus Schnittstelle können auch andere maschinennahe Kommunikationsstandards wie OPC UA, MQTT oder BACnet problemlos eingesetzt und angebunden werden.