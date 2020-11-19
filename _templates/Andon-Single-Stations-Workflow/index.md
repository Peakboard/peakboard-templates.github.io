---
layout: article
title: andon-übersicht eines arbeitsablaufs mit einzelnen arbeitsplätzen
description: 
  - Mit diesem Template überblicken Sie mehrere Arbeitsstationen um schnell auf mögliche Probleme an einem einzelnen Arbeitsplatz zu reagieren. Dieses Template kann sowohl in der Produktion (Einzelfertigung) als auch in der Montage verwendet werden.
lang: de
weight: 1000
isDraft: true
ref: Andon-Single-Stations-Workflow
category:
  - Andon
  - Produktion
  - Einzelfertigung
image: Uebersicht-Arbeitsablauf-Andon.png
image_thumbnail: Uebersicht-Arbeitsablauf-Andon_thumbnail.png
download: Uebersicht-Arbeitsablauf-Andon.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# mögliche datenquellen
Dieses Template verwendet Peakboard [Variablenlisten](https://help.peakboard.com/scripting/de-variables.html) als Datenquelle. Für deinen Use Case kannst du natürlich deine Systeme verwenden. Hier könnte die Kommunikation auch zwischen verschiedenen Boxen stattfinden. Einfach eine weitere Peakboard Box als Datenquelle hinzufügen und ganz einfach Variablen oder Variablen Listen dieser Box auslesen. Auch Peakboard Edge wäre hier eine Option, mit Peakboard Edge könntest du ganz einfach analoge Systeme anschließen und so Daten in die Digitale Welt bringen. 

Natürlich kannst du aber auch bestehende Infrastruktur verwenden und z.B. Maschinendaten auslesen über MQTT, OPC UA, Siemens S7, Werma, Mitsubishi Electric oder auch dein MES Anbinden. Es werden viele MES unterstützt. Unter anderem: FORCAM FORCE, AIS Automation FabEagle MES, camLine InFrame Synapse MES, MPDV MES HYDRA oder [viele mehr](https://peakboard.com/produkt/peakboard-versionen/#schnittstellen).