---
layout: article
title: digital signage für deine unternehmenskantine oder die gastronomie
description: 
  - Diese Vorlage zeigt, wie sie mit individuellen Bildern eine Digital Signage Anwendung kreieren können. Laden Sie Ihre bevorzugten Bilder in die Visualisierung und definieren Sie welches Bild wann angezeigt werden soll. Ihre Abbildungen und Uhrzeiten können Sie sowohl über den Peakboard Designer als auch über die API (Webinterface oder Peakboard App) verwalten.
lang: de
weight: 1000
isDraft: false
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
Lesen Sie hier Schritt für Schritt, wie Sie Ihre persönliche Digital Signage Anwendung mit diesem Template erstellen können. Eine generelle Einführung in Peakboard finden Sie in den [ersten Schritten](https://peakboard.rocks/erste-schritte). Wenn Sie wissen möchten, wie Sie eine Peakboard Box mit Ihrem Peakboard Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden [Artikel](https://peakboard.rocks/anschliessen). Laden Sie zunächst den Peakboard Designer [hier](https://peakboard.com/peakboard-designer/?utm_source=templates_overview&utm_medium=description_link&utm_campaign=templates) kostenfrei herunter um eine Visualisierung zu erstellen.

### Digital Signage mit individuellen Bildern
Um die Bilder in der Vorlage durch Ihre eigenen zu ersetzen, ziehen Sie einfach die gewünschten Bilddateien (PNG, JPG) per Drag&Drop in die linke Sidebar des Peakboard Desginers. Ihre Abbildungen finden Sie nun unter dem Punkt 'Ressourcen'. Bilder die Sie nicht benötigen, können Sie einfach löschen.

![image_live](assets/screenshot_variables_resources.png)

### Einstellen der Variablen
Über die Variablen in der linken Sidebar des Peakboard Designers können Sie die Visualisierung verwalten. In der Variablenliste ‘screenList’ werden die Anzeige-Zeiträume für Ihre Bilder festgelegt. Geben Sie dazu unter ‘Image (String)’ den genauen Dateinamen (inkl. Dateiendung) ein und legen Sie dann unter ‘visible_from (String)’ die Startuhrzeit und unter ‘visible_until (String)’ die Enduhrzeit fest. Diese ist täglich gültig.

Stellen Sie mit Hilfe der String-Variable ‘defaultImage’ ein Default-Bild ein, indem Sie im Pop-Up den genauen Dateinamen inkl. Dateiendung eingeben. Dieses Bild wird angezeigt, wenn kein anderes Bild in der 'screenList' für die aktuelle Uhrzeit definiert ist.

Die voreingestellte Laufzeit der Bilder können Sie mit der Variable ‘screenDurationInSeconds (Number)’ verändern. Klicken Sie dazu auf die Variable und legen Sie unter ‘Value’ die Sekundenzahl fest.

### Verwaltung über das Web-Interface
Wenn Sie bereits eine Peakboard Box besitzen, können Sie die Laufzeiten auch über das Webinterface auf der Startseite des Peakboard Designers unter 'Verwalten / Hochladen' verändern. Im Dialog wählen Sie die gewünschte Peakboard Box aus (Sie müssen die Visualisierung bereits auf eine Peakboard Box geladen haben). Klicken Sie nun auf den Button 'Webinterface'. Mehr über das Webinterface erfahren Sie [hier](https://peakboard.rocks/webinterface). Für den Login werden die mit der Peakboard Box ausgelieferten Anmeldedaten benötigt.

Anschließend sehen Sie einen Screenshot Ihrer aktuell laufenden Visualisierung und auf der rechten Seite die Variablen. Klicken Sie die gewünschte Variable an um den Wert anzupassen.

### Bildnachweis
Frei verwendbare Abbildungen in hoher Qualität finden Sie auf https://unsplash.com/. Verwendete Bilder: /photos/ykThMylLsbY, /photos/H5Hj8QV2Tx4, /photos/uVPV_nV17Tw, /photos/MqT0asuoIcU, /photos/5KS7T3Gs3CA, /photos/9J7sHieVFi0, /photos/8Nc_oQsc2qQ.