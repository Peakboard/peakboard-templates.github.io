---
layout: article
title: Digitales Schwarzes Brett mit OneDrive Anbindung
description: 
  - Dieses Board zeigt einige Unternehmensinformationen an und hilft, Mitarbeiter über Neuigkeiten zu informieren. Alle News, Bilder und das PDF können über einen einzelnen OneDrive Order verwaltet werden. Mit diesem Template kannst du deine eigene Digital Signage Anwendung erstellen.
lang: de
weight: 2000
isDraft: true
ref: Digital-Bulletin-Board-With-OneDrive
category:
  - Administration
  - Empfang
  - Schwarzes Brett
image: Digitales-Schwarzes-Brett-mit-OneDrive.png
image_thumbnail: Digitales-Schwarzes-Brett-mit-OneDrive_thumbnail.png
download: Digitales-Schwarzes-Brett-mit-OneDrive.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# mögliche datenquellen

Dieses Template wurde mit Bilder und einer Excel Datei erstellt, welche in einem OneDrive Verzeichnis liegen. Dies ist aber nur ein möglicher Weg und dient lediglich als Beispiel. Sie können dieses Template beispielsweise auch mit folgenden Datenquellen verwenden: Google Spreadsheet, RSS-Feed, JSON, XML, CSV, OData, Web Services, REST-API, Microsoft Excel, Google Docs, MS SharePoint Lists, Dropbox, Microsoft OneDrive, Google Drive, Microsoft,SharePoint Document Libraries, Microsoft Teams Files oder mit einem lokalen Dateiserver.

# so funktioniert's

Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten, wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei [heruntergeladen](https://peakboard.com/peakboard-designer/?utm_campaign=templates&utm_medium=description_link&utm_source=templates_overview) werden.

Um den Inhalt dieses Templates zu aktualisieren, kannst du die Dateien aus diesem [Github-Ordner](https://github.com/Peakboard/peakboard-templates.github.io/tree/master/_templates/Digital-Bulletin-Board-With-OneDrive/data-files) herunterladen. Im Anschluss musst du die Dateien an den gewünschten Zielort ablegen. Wähle aus einer der zahlreichen Cloud-Dienste aus oder füge sie direkt zur Visualisierung hinzu oder verwende einen sie als Dateien in deinem Netzwerk, alles ist möglich. Am einfachsten geht es mit einem der Cloud-Dienste.

Wenn du ein Bild oder die angezeigte PDF-Datei ändern willst, müsst du nur eine Datei mit dem gleichen Namen hochladen, anschließend wird der Inhalt der neuen Datei angezeigt. So ist unser OneDrive Ordner aus:

![image_live](img/OneDrive-Data-Overview.png)

Wenn du die Datei company_data.xlsx öffnest, siehst du zwei Datenblätter. Das erste Blatt dient zur Pflege der Daten für die Mittagsmenüs. Du kannst die Zeilene einfach aktualisieren und jeweils das Datum, die Namen für die Mahlzeiten und einen Preis hinzufügen. Es werden immer die Mahlzeiten aus der Zeilte mit dem heutigen Datum angezeigt. Das zweite Blatt ermöglicht es, die Nachrichten zu aktualisieren. Es werden immer die letzten fünf Zeilen für die Visualisierung verwendet. So sieht die Excel Datei aus:

![image_live](img/Excel-Data-Structure.png)

Nachdem du die Dateien in deinem gewünschten Ordner abgelegt und angepasst hast, musst du noch die Verbindung von Peakboard zu den Dateien herstellen. Dafür musst du im Peakboard Designer dieses Template öffnen und jeweils unter Data die beiden Datenquellen 'news_excel' und 'food_excel' aktualisieren. Wähle den gewünschten Dienst und die Datei aus und klicke auf 'Daten laden'.

![image_live](img/Excel-Data-Source-Selection.png)

Nachdem du diesen Dialog geschlossen hast und alle benötigten Datenquellen und Ressourcen aktualisiert sind, solltest du deine Daten nach Drücken des 'Vorschau'-Buttons sehen können.

## wetter widget aktualisieren

Wenn du dieses Wetter Widget nicht verwenden möchtest, kannst du es einfach im Peakboard Designer das Element aus der Visualisierung löschen. Wählen es dafür mit einem Rechtsklick aus und klicke auf 'Löschen'.

Wenn du das Wetter Widget verwenden möchtest, kannst du dir ein eigenes Widget mit deiner Stadt unter folgender Adresse erstellen: [https://weatherwidget.io/](https://weatherwidget.io/).

Gib die Parameter wie Stadt, Sprache und die Einheit an.

Wenn du mit den Optionen zufrieden bist, kannst du auf den Button 'Get Code' klicken. Im geöffneten Fenster findest du nun den fertigen Code für dein persönliches Widget. Kopiere diesen Code indem du einfach auf den Button 'Copy to Clipboard' klickst.

Gehe nun zurück in den Peakboard Designer und wähle das Control 'Web widget' in der Sidebar aus oder klicke direkt auf das Wetter Widget. 

![image_live](img/select_weather_widget.gif)

In der weiteren Sidebar auf der rechten Seite findest du nun einige Parameter zu diesem Element. Klicke auf den '...' Button im Punkt 'HTML-Code' (2). In dem geöffneten Fenster kannst du nun den bestehenden Code durch deinen erstellten Code ersetzen (3). 

![image_live](img/web_widget_code.png)

# Bildnachweis

Die verwendeten Bilder stammen von [Freepik](http://freepik.com/) und [Unsplash](https://unsplash.com/). 

- https://image.freepik.com/free-photo/three-starfishes-with-blue-bag-sand_23-2147952978.jpg
- https://image.freepik.com/free-photo/expression-spine-cut-out-injured-brown-hair_1134-954.jpg
- https://image.freepik.com/free-photo/stock-market-forex-trading-graph-graphic-concept_73426-172.jpg
- https://image.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg
- https://image.freepik.com/free-psd/website-design-your-business_24972-394.jpg
- https://unsplash.com/photos/UCQCmt1i5ek
- https://unsplash.com/photos/bRdRUUtbxO0
- https://unsplash.com/photos/DVRXFIH42d0
- https://unsplash.com/photos/h5TDvTDwkBA
- Icons used in PDF [designed by Freepik](http://freepik.com/)