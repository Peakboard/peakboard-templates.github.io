---
layout: article
title: Dein Teamboard für ein effizientes Shopfloormeeting
description: 
   - Dieses voll funktionsfähige interaktive Dashboard hilft dir, die Shopfloormeetings deines Teams zu digitalisieren. Dabei behältst du stets den Überblick über alle offenen Aufgaben deines Teams. Mit dem Dashboard kannst du neue Aufgaben anlegen und diese einzelnen Teammitgliedern zuordnen, bestehende Aufgaben anpassen, wenn diese sich beispielsweise in einem neuen Bearbeitungsstatus befinden sowie Aufgaben abschließen oder löschen. Das Dashboard wird dabei mit Maus und Tastatur, welche an die Peakboard Box angeschlossen werden, bedient. Die erfassten Daten werden in einer Liste in Peakboard Hub gespeichert und persistiert. So können die erfassten Daten auch für langfristige Auswertungen herangezogen werden.

  - Über ein Menü auf der linken Seite kannst du außerdem zu weiteren Screens navigieren, welche beliebige weitere wichtige Inhalte für dein Shopfloormeeting anzeigen können. Im Template wurden hier exemplarisch zwei weitere Screens mit Informationen zu Sicherheits- & Qualitätskennzahlen sowie OEE Werten umgesetzt. 

lang: de
weight: 1000
isDraft: true
ref: Shopfloor-Teammeeting-Board
category:
  - Alle
  - Shopfloor
  - Interaktion
image: Shopfloor-Teambesprechung-Board.png
image_thumbnail: Shopfloor-Teambesprechung-Board_thumbnail.png
download: Shopfloor-Teambesprechung-Board.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# mögliche datenquellen
Dieses Template verwendeten eine Peakboard Hub Liste als zentrale Datenquelle. Die Daten, die mithilfe einer an die Peakboard Box angeschlossenen Maus und Tastatur erfasst werden, werden dabei in eine Peakboard Hub Liste geschrieben, die dann für die Datenvisualisierung ausgelesen wird. Alternativ können hierfür andere Datenbanken wie SQL, Oracle oder ODBC genutzt werden. Auch die Namen der Teammitglieder sind in einer Liste im Peakboard Hub gespeichert.

# so funktioniert's
Um dieses Template vollumfänglich nutzen zu könnten, benötigst du Peakboard Hub. Wie du diesen installierst, erfährst du [hier](https://help.peakboard.com/hub/de-hub_installation.html). Öffne Peakboard Hub, wähle im Menü “Lists” und klicke auf "Import", um die benötigte Tabellenstruktur zu importieren. Diese kannst du <a href="QualityData.txt" class="inline" download>hier</a> herunterladen. 

![](img/peakboard-hub-lists.png)

Das Feld "Name" solltest du mit “QualityData” ausfüllen und darunter die zuvor heruntergeladene Datei wählen.

![](img/peakboard-hub-import-list.png)

 Öffne nun den Peakboard Designer und [stelle eine Verbindung zu Peakboard Hub](https://help.peakboard.com/hub/de-hub_connectpbdesigner.html) her. Öffne nun dieses Template im Peakboard Designer und gehe erneut in die Peakboard Hub Einstellungen unter Projekt/Project > Peakboard Hub.

 ![](img/peakboard-designer-hub-settings.png)

Klicke auf den “Überschreiben” Button, um die Peakboard Hub Connection des Templates mit deinen eigenen Anmeldedaten zu überschreiben.

 ![](img/peakboard-designer-overwrite-credentials.png)

 Nun ist alles bereit und das Template schreibt die erfassten Daten in die angelegte Liste im Peakboard Hub.
