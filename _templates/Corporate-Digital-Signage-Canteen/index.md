---
layout: article
title: Digital Signage für die Unternehmenskantine oder die Gastronomie
description: 
  - Diese Vorlage stellt ein Beispiel dar, wie sie mit Bildern eine Digital Signage Anwendung kreieren können. Für das Beispiel wurden Bilder, wie Wochenpläne, Angebote und Menüs aus dem Bereich Gastronomie verwendet. Sie müssen nur ihre digitalisierten Karten in unsere Vorlage laden und können dann in einer Tabelle definieren, zu welchen Uhrzeiten welches Bild angezeigt werden soll. Das Verwalten, Verändern und Einfügen von Bildern und Uhrzeiten können Sie auch über das Webinterface (API) bzw. die App steuern. So können Sie jederzeit Anpassungen an ihrer Visualisierung vornehmen.
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
Um einen möglichst einfachen Einstieg in die Erstellung ihrer Digital Signage Anwendung zu bekommen, bieten wir vorgefertigte Templates an. Dies ist eine Schritt für Schritt Anleitung, wie Sie Ihre persönliche Digital Signage Anwendung mit diesem Template erstellen können. Eine generelle Einführung in den Peakboard Designer finden Sie in den ersten Schritten in unserem Help Center. Wenn Sie wissen möchten, wie Sie eine Peakboard Box mit Ihrem Designer verbinden und eine Visualisierung übertragen, lesen Sie am besten folgenden Artikel. Zum Erstellen einer Visualisierung benötigen Sie den Peakboard Designer. Dieser kann kostenfrei heruntergeladen werden.

### Digital Signage mit individuellen Bildern
Diese Visualisierung bietet Platz für beliebig viele Bilder. Für jedes Bild kann in einer Tabelle individuell festgelegt werden, in welchen Zeiträumen diese angezeigt werden sollen. Unterstützt werden folgende Formate: PNG, JPG.

### Konfiguration
Das Template ist so gestaltet, dass Sie mit einem geringen Konfigurationsaufwand Ihre erste Digital Signage Anwendung schnell umsetzen können. Sie müssen hierzu nur Ihre eigenen Bilder in die Vorlage laden, die Uhrzeiten festlegen und die Visualisierung auf Ihre Peakboard Box laden.

### Hochladen der Bilder
Um die Bilder in der Vorlage mit denen von Ihnen gewünschten Bildern zu ersetzen, benötigen Sie eigene Bilddateien (PNG, JPG) im Format 1920x1080. Ziehen Sie einfach die gewünschten Bilddateien per Drag&Drop auf die linke Sidebar des Peakboard Designers. Anschließend finden Sie die Bilddateien in der Sidebar unter dem Punkt ‘Ressourcen’. 
Wenn Sie die bereits vorhandenen Bilder der Vorlage nicht benötigen, können Sie diese aus der Vorlage löschen.

### Einstellen der Variablen(-liste)
Nachdem Sie die Bilder in den Peakboard Designer geladen haben, können Sie festlegen, welches Bild als Default-Bild eingestellt werden soll, zu welcher Uhrzeit welche Bilder angezeigt werden sollen und für wie lange diese angezeigt werden.

Für das Einstellen eines Default-Bildes öffnen Sie in der linken Sidebar des Peakboard Designers unter Variables die String-Variable ‘defaultImage’. Im Pop-Up geben Sie den genauen Namen ihres Default-Bildes an. Dieses Default-Bild wird jedes mal aktiviert, wenn gerade keine anderen Bilder angezeigt werden sollen.

GIF

Weiter können nun in der Variablenliste ‘screenList’ die Anzeige-Zeiträume für die Bilder festgelegt werden. Geben Sie hierzu unter ‘Image (String)’ den genauen Bildnamen ein und legen dann unter ‘visible_from (String)’ die Startuhrzeit und unter ‘visible_until (String)’ die Enduhrzeit fest.

Sollten Sie noch die voreingestellte Laufzeit der Bilder (10s) verändern wollen, so können Sie dies mit der Variable ‘screenDurationInSeconds (Number)’ einstellen. Klicken Sie hierzu auf die Variable und legen unter ‘Value’ die Sekundenzahl fest.

### Verwaltung über das Web-Interface
Sie können das Webinterface direkt in Ihrem Browser mit der URL: http://NameIhrerBox:40404 aufrufen. Sie müssen den Namen Ihrer Box eingeben, gefolgt vom Port :40404. Für den Login werden die mit der Box ausgelieferten Anmeldedaten benötigt. Anschließend sehen sie einen Screenshot Ihrer aktuell laufenden Visualisierung (1) und auf der rechten Seite (2) verschiedene Variablenlisten. Hier können Sie nun in der Variablenliste ‘text_labels’ die Texte bearbeiten. Mit dem Refresh-Button können Sie einen neuen Screenshot Ihrer Visualisierung laden (3).

Bilder aus Web-Interface einfügen


### Einstellen des Zeit-Formats
Sollten Sie ein anderes Zeitformat, als das aus der Vorlage, verwenden wollen, dann klicken Sie auf der linken Sidebar des Peakboard Designers unter ‘Data’ mit einem Doppelklick auf ‘Time (Time)’. Nun können Sie im Pop-Up-Fenster unter ‘Format’ ein neues Format auswählen. Darüber hinaus können Sie hier der Zeitdatenquelle einen neuen Namen geben oder gegebenenfalls auch die Zeitzone ändern.

GIF 

Das wars, Sie haben Ihre Visualisierung auf Ihre Bedürfnisse angepasst. Nun müssen Sie die Visualisierung noch auf Ihre Peakboard Box hochladen. Dazu gehen Sie im Menü oben unter dem Tab ‘Startseite’ auf den Punkt ‘Verwalten / Hochladen’. Im anschließenden Dialog wählen Sie Ihre Box und klicken auf ‘Hochladen’. Nun wird die Visualisierung auf Ihre Box geladen, nach kurzer Zeit sollte die Visualisierung, auf dem an der Peakboard Box angeschlossenen Bildschirm, sichtbar werden. Falls Sie Ihre Peakboard Box noch nicht verbunden haben, lesen Sie am besten folgenden Artikel.