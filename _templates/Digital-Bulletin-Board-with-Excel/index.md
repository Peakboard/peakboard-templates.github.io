---
layout: article
title: digitales schwarzes brett mit excel
description: 
  - Schwarzes Brett 2.0. Mitarbeiter auf einem digitalen Infoboard automatisiert auf dem Laufenden halten. Egal ob es dabei um allgemeine Mitarbeiterinformationen, einen Newsticker, den Speiseplan in der Mensa, Schichtpläne, Ankündigungen oder aber Raumbelegungspläne am Empfang geht, du bleibst hinsichtlich der Medienformate, Darstellung und Inhalte völlig flexibel. Alle News, Bilder und PDF-Dokumente können über einen OneDrive Order verwaltet werden. Mit diesem Template steht deiner individuellen Digital Signage Anwendung nichts mehr im Weg.
lang: de
weight: 1900
isDraft: false
ref: Digital-Bulletin-Board-with-Excel
category:
  - Administration
  - Empfang
  - Schwarzes Brett
image: Digitales-Schwarzes-Brett-mit-Excel.png
image_thumbnail: Digitales-Schwarzes-Brett-mit-Excel_thumbnail.png
download: Digitales-Schwarzes-Brett-mit-Excele.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# mögliche datenquellen

Das Template wurde beispielhaft mit Hilfe einer Excel Datei erstellt, die in dem Dashboard Verzeichnis liegen. Viele weitere Datenquellen sind denkbar, wie z.B. Google Spreadsheet, RSS-Feed, JSON, XML, CSV, OData, Web Services, REST-API, Microsoft Excel, Google Docs, MS SharePoint Lists, Dropbox, Microsoft OneDrive, Google Drive, Microsoft,SharePoint Document Libraries, Microsoft Teams Files, ein lokaler Dateiserver und [mehr](https://peakboard.com/datenanbindungen/).

# so funktioniert's

[Hier](https://peakboard.rocks/erste-schritte) findest du eine allgemeine Einführung in Peakboard. Wenn du wissen möchtest, wie du den Peakboard Designer mit deiner Peakboard Box verbindest und deine Visualisierung überträgst, hilft dir folgender [Artikel](https://peakboard.rocks/anschliessen) weiter. Hier kannst du dir den [Peakboard Designer](https://peakboard.com/peakboard-designer/?utm_campaign=templates&utm_medium=description_link&utm_source=templates_overview) kostenlos herunterladen.

Lade dir die Dateien aus [Github](https://github.com/Peakboard/peakboard-templates.github.io/tree/master/_templates/Digital-Bulletin-Board-with-Excel/data-files) herunter, um den Inhalt des Templates zu aktualisieren. Lege im Anschluss die Dateien an den gewünschten Zielort ab. Du kannst deine Dateien z.B. in einem der zahlreichen Cloud-Dienste ablegen. So werden sie immer aktualisiert, wenn du auch die Dateien im jeweiligen Cloud-Dienst aktualisierst. Du kannst die Dateien aber auch direkt zur Visualisierung hinzufügen, indem du sie der Peakboard Datei hinzufügst.

Wenn du ein Bild oder die angezeigte PDF-Datei ändern willst, lade einfach eine Datei mit demselben Namen hoch. So wir der Inhalt der neuen Datei angezeigt. Hier siehst du ein Beispiel für einen OneDrive Ordner:

![image_live](img/OneDrive-Data-Overview.png)

Wenn du die Datei board-inhalte.xlsx öffnest, siehst du zwei Datenblätter. Mit dem ersten Blatt kannst du die Daten für die Mittagsmenüs pflegen. Die Zeilen aktualisierst du, indem du das neue Datum, die Namen der Gerichte und einen Preis hinzufügst. Angezeigt werden dabei immer die Gerichte, die mit dem aktuellen Datum versehen sind. Im zweiten Blatt kannst du die Nachrichten aktualisieren. Visualisiert werden dabei immer die letzten fünf Zeilen. So sieht die Excel Datei aus:

![image_live](img/Excel-Data-Structure.png)

Nachdem du die Dateien in deinem gewünschten Ordner abgelegt und angepasst hast, stellst du noch die Verbindung von Peakboard zu den Dateien her. Öffne dazu dieses Template im Peakboard Designer und aktualisiere jeweils unter Data die beiden Datenquellen ‘news_excel’ und ‘food_excel’. Wähle den gewünschten Dienst und die Datei aus und klicke auf ‘Daten laden’.

![image_live](img/Excel-Data-Source-Selection.png)

Nachdem du diesen Dialog geschlossen hast und alle benötigten Datenquellen und Ressourcen aktualisiert sind, solltest du deine Daten nach Drücken des ‘Vorschau’-Buttons sehen können.

## wetter widget aktualisieren
Wenn du das Wetter Widget nicht verwenden möchtest, kannst du das Element im Peakboard Designer einfach aus der Visualisierung löschen. Wähle es dafür mit einem Rechtsklick aus und klicke auf ‘Löschen’.

Wenn du das Wetter Widget verwenden möchtest, kannst du dir dein eigenes Widget mit deiner Stadt unter folgender Adresse erstellen: [https://weatherwidget.io/](https://weatherwidget.io/).

Gib die Parameter wie Stadt, Sprache und die Einheit an.

Wenn du mit den Optionen zufrieden bist, klicke auf den Button ‘Get Code’. Im geöffneten Fenster findest du nun den fertigen Code für dein persönliches Widget. Kopiere diesen Code, indem du einfach auf den Button ‘Copy to Clipboard’ klickst.

Gehe nun zurück in den Peakboard Designer und wähle das Control ‘Web widget’ in der Sidebar aus oder klicke direkt auf das Wetter Widget.

![image_live](img/select_weather_widget.gif)

In der weiteren Sidebar auf der rechten Seite findest du nun einige Parameter zu diesem Element. Klicke auf den ‘…’ Button im Punkt ‘HTML-Code’ (2). In dem geöffneten Fenster kannst du nun den bestehenden Code durch deinen erstellten Code ersetzen (3).

![image_live](img/web_widget_code.png)


## fahrplanauskunft
Die Fahrplanauskunft geben den Mitarbeitern permanentes Wissen über die Abfahrt der S-Bahnen. Diese Informationen können über eine API der Deutschen Bahn verwaltet werden. Die API findest du hier: [https://developer.deutschebahn.com/store/apis/info?name=Timetables&version=v1&provider=DBOpenData/ lightboxes(https://developer.deutschebahn.com/store/apis/info? name = Stundenpläne & version = v1 & provider = DBOpenData /).

Du musst dich registrieren, um dein eindeutiges Authentifizierungstoken zu erhalten. Die Registrierung ist kostenlos und das Token ist gemäß den Einstellungen immer gültig.

Anschließend fügst du XML-Daten hinzu und schreibst in das Feld "Pfad" die gewünschte API-URL. Als nächstes setzt du den Authentifizierungstyp auf "Bearer" und gibst das Token in das angezeigte Feld ein.

Wenn du dies getan hast, gibst du den Pfad zu den gewünschten Informationen an und lädst die Daten.