---
layout: article
title: strichcode-scanner mit Peakboard Edge zum abrufen von metainformationen
description: 
  - Diese Vorlage zeigt, wie Sie mit Hilfe eines Scanners der mit Peakboard Edge verbunden ist, Informationen aus weiteren Quellen beziehen können. Jeder der Mitarbeiter verfügt über ein Peakboard Edge und einen Scanner. Wird ein Produkt gescannt, werden die Metadaten aus einer weiteren Datenquelle gezogen. Das Beispiel verwendet dafür eine Excel Datei, es könnten aber auch Informationen aus einem System wie SQL, SAP, etc. gezogen werden.
lang: de
weight: 2000
isDraft: false
ref: Edge-Barcode-Scanner-Info
category:
  - Alle
  - Interaktion
  - Edge
image: Edge-Strichcode-Scanner-Metainformationen.png
image_thumbnail: Edge-Strichcode-Scanner-Metainformationen_thumbnail.png
download: Edge-Strichcode-Scanner-Metainformationen.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# mögliche datenquellen

Dieses Template verwendet die Peakboard Edge Datenquelle. Peakboard Edge kann Informationen über externe Geräte direkt ein- und ausgeben. Peakboard Edge kommuniziert dabei nicht über ein Display, sondern wird immer mit einer Peakboard Box verbunden. [Hier kannst du mehr über Peakboard Edge erfahren](https://peakboard.com/produkt/peakboard-edge/). Die über das Peakboard Edge eingescannten Nummern können dann aus einem weiteres System Daten zu einem Auftrag holen. Dieses Template arbeitet mit einer Excel Datei, in deinem Szenario wäre ein ERP System wie: abas ERP, proALPHA ERP, Epicor ERP, Comarch ERP, QAD Adaptive ERP, MS Dynamics AX Axapta, MS Dynamics NAV oder SAP denkbar. Hier findest du eine Übersicht über [mögliche Schnittstellen](https://peakboard.com/schnittstellen/).


# so funktioniert’s

![image_live](edge-use-case-scanner-logistics.gif)
