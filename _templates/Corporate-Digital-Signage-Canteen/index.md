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
Dies ist eine Schritt für Schritt Anleitung, wie Sie Ihre persönliche Digital Signage Anwendung mit diesem Template erstellen können. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten, wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei [heruntergeladen](https://peakboard.com/peakboard-designer/?utm_source=templates_overview&utm_medium=description_link&utm_campaign=templates) werden.

### Digital Signage mit individuellen Bildern
Um die Bilder in der Vorlage mit denen von Ihnen gewünschten Bildern zu ersetzen, benötigen Sie eigene Bilddateien (PNG, JPG). Ziehen Sie einfach die gewünschten Bilddateien per Drag&Drop auf die linke Sidebar des Peakboard Designers. Anschließend finden Sie die Bilddateien in der Sidebar unter dem Punkt ‘Ressourcen’. Bilder die Sie nicht benötigen, können Sie einfach löschen.

![image_live](assets/screenshot_variables_resources.png)

### Einstellen der Variablen
Über die Variablen in der linken Sidebar des Peakboard Designers können Sie die Visualisierung verwalten. In der Variablenliste ‘screenList’ werden die Anzeige-Zeiträume für die Bilder festgelegt. Geben Sie hierzu unter ‘Image (String)’ den genauen Bildnamen (inkl. Dateiendung) ein und legen dann unter ‘visible_from (String)’ die Startuhrzeit und unter ‘visible_until (String)’ die Enduhrzeit fest, diese ist täglich gültig.

Stellen sie mit Hilfe der String-Variable ‘defaultImage’ ein Default-Bild ein. Dieses Bild wird angezeigt, wenn kein anderes Bild in der 'screenList' für die aktuelle Uhrzeit definiert ist. Im Pop-Up geben Sie den genauen Namen ihres Default-Bildes an (inkl. Dateiendung).

Sollten Sie noch die voreingestellte Laufzeit der Bilder (10s) verändern wollen, so können Sie dies mit der Variable ‘screenDurationInSeconds (Number)’ einstellen. Klicken Sie hierzu auf die Variable und legen unter ‘Value’ die Sekundenzahl fest.

### Verwaltung über das Web-Interface
Alternativ können Sie die Laufzeiten auch über das Webinterface verwalten, wenn Sie bereits eine Box besitzen. Dieses Webinterface ist eine Webseite, welche Sie aufrufen können, indem Sie im Peakboard Designer im 'Startseite' Tab auf 'Verwalten / Hochladen' klicken. Im Dialog wählen Sie die gewünschte Box aus (Sie müssen die Visualisierung bereits auf eine Box geladen haben). Klicken Sie nun auf den Button 'Webinterface'. Mehr über das Webinterface können Sie [hier](https://peakboard.rocks/webinterface) erfahren. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt.

Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung und auf der rechten Seite die Variablen. Klicken Sie die gewünschte Variable an und passen sie den Wert an.

### Bildnachweis
Dies sind die Links zu den Bildern welche für den Hintergrund der Visualisierung verwendet wurden. https://unsplash.com/ ist ein sehr interessantes Projekt, welches eine Vielzahl frei verwendbarer Bilder in hoher Qualität bietet. /photos/ykThMylLsbY, /photos/H5Hj8QV2Tx4, /photos/uVPV_nV17Tw, /photos/MqT0asuoIcU, /photos/5KS7T3Gs3CA, /photos/9J7sHieVFi0, /photos/8Nc_oQsc2qQ.