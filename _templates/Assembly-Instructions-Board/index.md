---
layout: article
title: Werkerassistenzsystem
description: 
  - Diese Anwendung dient als Werkerassistenzsystem und ermöglicht eine effiziente und fehlerfreie Montage. Das interaktive Dashboard bietet zunächst einen Überblick über den Fortschritt aller offenen Montageaufträge. Wird mittels eines Touchscreens oder einer an die Peakboard Box angeschlossenen Maus ein Auftrag über einen Klick auf die jeweilige Kachel ausgewählt, erhält der Werker eine schrittweise Anleitung zur Montage des jeweiligen Produkts. Die Anweisungen werden durch Beschreibungstexte, Bilder, technische Zeichnungen sowie einer Materialliste unterstützt. 

  - Während der Montage werden verschiedene Parameter erfasst, um den Produktionsprozess zu überwachen und zu bewerten. Dazu gehört die Erfassung der benötigten Zeit sowie die Zählung der OK- und NOK-Teile am Ende der Montage. Diese Daten dienen der Qualitätskontrolle und ermöglichen es, deinen Produktionsablauf zu optimieren und mögliche Verbesserungen schneller vorzunehmen.

  - Darüber hinaus bietet das Dashboard die Möglichkeit, benötigte Materialien in der internen Lagerlogistik direkt nachzubestellen oder Probleme an Produktionsverantwortliche zu melden.

  - Mit diesem Dashboard können Werker ihre Produktivität steigern, Fehler minimieren und eine reibungslose Montage sicherstellen. Ebenso können neue Mitarbeitende im Unternehmen jetzt ohne großen Einlernaufwand direkt mit der Montage loslegen. 

lang: de
weight: 1000
isDraft: false
ref: Assembly-Instructions-Board
category:
  - Alle
  - Shopfloor
  - Produktion
  - Interaktion
  - Montage
  - Einzelfertigung
  - Peakboard Hub
image: Montage-Anleitung-Board.png
image_thumbnail: Montage-Anleitung-Board_thumbnail.png
download: Montage-Anleitung-Board.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# Mögliche Datenquellen
Dieses Template verwendet vier verschiedene Peakboard Hub Listen als Datenquelle. Die Liste "Products" enthält Stammdaten zu allen Produkten die dein Unternehmen fertigt. Die Liste "Materials" enthält Stammdaten zu allen Materialien, die in deinem Lager geführt werden und die benötigt werden, um deine Produkte fertigen zu können. Die Liste "Bill of materials" enthält Daten darüber, aus welchen Materialen die einzelnen Produkte gefertigt werden. Die Liste "Assembly steps" enthält Daten zu den einzelnen Montageschritten aller Produkte. Um dieses Template mit deinem eigenen Peakboard Hub zu nutzen, kannst du über die folgenden Links die Tabellenstruktur der jeweiligen Listen herunterladen: <a href="Products.txt" class="inline" download>Products</a> , <a href="Materials.txt" class="inline" download>Materials</a> , <a href="BillOfMaterials.txt" class="inline" download>Bill of materials</a> , <a href="Assembly_Steps.txt" class="inline" download>Assembly steps</a>. Importiere diese in Peakboard Hub und passe anschließend die Datenquellen im Template entsprechend an. Alternativ zu Peakboard Hub Listen könnten diese Daten auch aus einer oder mehreren Datenbanken stammen. 

# Übersicht der aktuellen Montageaufträge

Das Dashboard bietet eine Übersicht über alle offenen Montageaufträge. Durch einen Klick auf die jeweilige Kachel wird die dazugehörige Montageanweisung geöffnet.
![image_live](Montage-Anleitung-Board-Auftraege.png)

