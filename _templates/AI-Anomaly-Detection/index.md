---
layout: article
title: immer einen schritt voraus – so vermeidest du fehlproduktion mithilfe von KI
description: 
  - Dieses Template verwendet ein KI-Modell in der Azure Cloud, um zu erkennen, wenn eine Anomalie in der Produktion auftritt, wodurch die Wahrscheinlichkeit einer Fehlproduktion erhöht wird. Dazu werden zwei Messwerte an ein KI-Modell gesendet und über die JSON-Datenquelle auf Anomalien geprüft. Dieser Wert dient als Indikator für die Qualität der Produktion und ermöglicht es dir, Fehlproduktionen rechtzeitig zu erkennen und zu vermeiden. Das Dashboard zeigt dir auftretende negative Werte leicht verständlich und auf einen Blick an, so dass Mitarbeiter und Mitarbeiterinnen selbstständig und umgehend reagieren können, um fehlerhafte Produktionsteile zu vermeiden. Spare Zeit und Kosten in deiner Produktion und lade dir das Template kostenlos herunter.
lang: de
weight: 1700
isDraft: true
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
