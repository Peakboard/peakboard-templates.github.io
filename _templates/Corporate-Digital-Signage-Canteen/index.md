---
layout: article
title: Digital Signage für die Unternehmenskantine oder die Gastronomie
description: 
  - Diese Vorlage stellt ein Beispiel dar, wie sie mit Bildern eine Digital Signage Anwendung kreieren können. Für dieses Beispiel wurden Bilder aus der Gastronomie verwendet. Laden Sie Ihre eigenen Bilder in die Visualisierung und definieren Sie welches Bild wann angezeigt werden soll. Das Bilder und Uhrzeiten können Sie auch über das Webinterface (API) bzw. die Peakboard App verwalten.
lang: de
weight: 1000
isDraft: true
ref: Corporate-Digital-Signage-Canteen
category:
  - Administration
  - Empfang
  - Digital Signage
image: Digital-Signage-fuer-Unternehmen.png
image_thumbnail: Digital-Signage-fuer-Unternehmen_thumbnail.png
download: Digital-Signage-fuer-Unternehmen.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
## So funktioniert’s
Dies ist eine Schritt für Schritt Anleitung, wie Sie Ihre persönliche Digital Signage Anwendung mit diesem Template erstellen können. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten, wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei [heruntergeladen](https://peakboard.rocks/designer-from-welcome) werden.

### Digital Signage mit individuellen Bildern
Erstellen Sie beliebig viele Bilder und legen Sie in einer Tabelle für jedes Bild individuell fest, wann es angezeigt werden soll. 
Um die Bilder in der Vorlage mit denen von Ihnen gewünschten Bildern zu ersetzen, benötigen Sie eigene Bilddateien (PNG, JPG) im Format 1920x1080 (Nur Seitenverhältnis wichtig, Bilder werden skaliert). Ziehen Sie einfach die gewünschten Bilddateien per Drag&Drop auf die linke Sidebar des Peakboard Designers. Anschließend finden Sie die Bilddateien in der Sidebar unter dem Punkt ‘Ressourcen’. Bilder die Sie nicht benötigen, können Sie einfach löschen.

### Einstellen der Variablen(-liste)
Nachdem Sie die Bilder in den Peakboard Designer geladen haben, können Sie festlegen, welches Bild als Default-Bild eingestellt werden soll, zu welcher Uhrzeit welche Bilder angezeigt werden sollen und für wie lange diese angezeigt werden.

Für das Einstellen eines Default-Bildes öffnen Sie in der linken Sidebar des Peakboard Designers unter Variables die String-Variable ‘defaultImage’. Im Pop-Up geben Sie den genauen Namen ihres Default-Bildes an (inkl. Dateiendung). Dieses Default-Bild wird jedes mal aktiviert, wenn gerade keine anderen Bilder angezeigt werden sollen.

Weiter können nun in der Variablenliste ‘screenList’ die Anzeige-Zeiträume für die Bilder festgelegt werden. Geben Sie hierzu unter ‘Image (String)’ den genauen Bildnamen ein (inkl. Dateiendung) und legen dann unter ‘visible_from (String)’ die Startuhrzeit und unter ‘visible_until (String)’ die Enduhrzeit fest, diese ist für jeden Tag gültig.

Sollten Sie noch die voreingestellte Laufzeit der Bilder (10s) verändern wollen, so können Sie dies mit der Variable ‘screenDurationInSeconds (Number)’ einstellen. Klicken Sie hierzu auf die Variable und legen unter ‘Value’ die Sekundenzahl fest.

### Verwaltung über das Web-Interface
Alternativ können Sie die Laufzeiten auch über das Webinterface verwalten, **wenn Sie bereits eine Box besitzen**. Dieses Webinterface ist eine Webseite, welche Sie aufrufen können, indem Sie im Peakboard Designer im 'Startseite' Tab auf 'Verwalten / Hochladen' klicken. Im Dialog wählen Sie die gewünschte Box aus (Sie müssen die Visualisierung bereits auf eine Box geladen haben). Klicken Sie nun auf den Button 'Webinterface'. Mehr über das Webinterface können Sie [hier](https://peakboard.rocks/webinterface) erfahren. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung und auf der rechten Seite die Variablen. Klicken Sie die gewünschte Variable an und passen sie den Wert an.