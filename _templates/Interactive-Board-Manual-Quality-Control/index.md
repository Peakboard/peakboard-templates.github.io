---
layout: article
title: Betriebsdatenerfassung leicht gemacht – dein interaktives Dashboard für die manuelle Qualitätskontrolle
description: 
   - Dieses Template dient als interaktives Dashboard für die manuelle Betriebsdatenerfassung in der Qualitätskontrolle. Über ein Touchscreen-Display können die Mitarbeitenden mit dem Dashboard interagieren und Eingaben zu den geprüften Artikeln machen. Ist ein Artikel fehlerfrei, kann der Werker oder die Werkerin das durch Drücken des "OK"-Buttons festhalten. Bei Ausschuss wiederum, kann der Fehler über die entsprechenden Buttons näher spezifiziert werden. 
   - Auf Basis dieser Daten liefert das Dashboard deinen Mitarbeitern und Mitarbeiterinnen einen Überblick über die eigene und die benachbarten Produktionslinien. Dank der Echtzeit-Visualisierung sehen sie zudem sofort, wenn sich ein bestimmter Fehler überproportional gehäuft hat. So können sie schnell reagieren und den entsprechenden Produktionsprozess umgehend optimieren. 
   - Die mithilfe des Touchscreens erfassten Daten werden in einer Liste in Peakboard Hub gespeichert und persistiert. Das bietet den Vorteil, dass die Daten nicht nur für einen Echtzeit-Überblick, sondern auch für historische Analysen verwendet werden können. Die Langzeit Analyse kann dabei entweder über das Dashboard selbst oder über ein BI-Tool wie Power BI, Tableau oder Click durchgeführt werden. 
   - Lade dir das Template jetzt kostenlos herunter und passe es an deine individuellen Bedürfnisse oder das Corporate Design deines Unternehmens an. Für eine noch einfachere Bedienbarkeit wurden alle Skripte in dieser Vorlage mit Peakboard Building Blocks, unserem Low-Code-Skripteditor, erstellt.
lang: de
weight: 1000
isDraft: true
ref: Interactive-Board-Manual-Quality-Control
category:
  - Alle
  - Produktion
  - Shopfloor
  - Interaktion
image: Interaktives-Board-Manuelle-Qualitaetskontrolle.png
image_thumbnail: Interaktives-Board-Manuelle-Qualitaetskontrolle_thumbnail.png
download: Interaktives-Board-Manuelle-Qualitaetskontrolle.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# mögliche datenquellen
Dieses Template verwendeten eine Peakboard Hub Liste als zentrale Datenquelle. Die Daten, die mithilfe des Touchscreens erfasst werden, werden dabei in eine Peakboard Hub Liste geschrieben, die dann für die Datenvisualisierung ausgelesen wird. Alternativ können hierfür andere Datenbanken wie SQL, Oracle oder ODBC genutzt werden.

# so funktioniert's
Um dieses Template vollumfänglich nutzen zu könnten, benötigst du den Peakboard Hub. Wie du diesen installierst, erfährst du [hier](https://help.peakboard.com/hub/de-hub_installation.html). Öffnen den Peakboard Hub, wähle im Menü “Lists” und klicke auf den "Import" Button um die benötigte Tabellenstruktur zu importieren. Diese kannst du hier [hier](QualityData.txt) herunterladen. 

![](img/peakboard-hub-lists.png)

Das Feld "Name" solltest du mit “QualityData” ausfüllen und darunter die zuvor heruntergeladene Datei selektieren.

![](img/peakboard-hub-import-list.png)

 Öffne nun den Peakboard Designer und stelle wie [hier](https://help.peakboard.com/hub/de-hub_connectpbdesigner.html) erklärt, eine Verbindung zum Peakboard Hub her. Öffne nun dieses Template im Peakboard Designer und gehe erneut in die Peakboard Hub Einstellungen unter Projekt/Project > Peakboard Hub.

 ![](img/peakboard-designer-hub-settings.png)

Klicke auf den “Überschreiben/Overwrite” Button um die Hub Connection des Templates mit deinen eigenen Anmeldedaten zu überschreiben.

 ![](img/peakboard-designer-overwrite-credentials.png)

 Nun ist alles Bereit und das Template schreibt die erfassten Daten in die angelegte Liste im Peakboard Hub.