---
layout: article
title: Dashboard für die Produktionsanalyse – Arbeitsplatz-Übersicht mit Anbindung an FORCAM FORCE™
description: 
  - Dieses Template ermöglicht dir eine detaillierte Übersicht über einen einzelnen Arbeitsplatz in der Produktion. Es verwendet eine Anbindung an FORCAM FORCE™, der IT-Plattform für das industrielle Internet der Dinge (IIoT) von FORCAM. Die Produktionsdaten, die du dir aus der FORCAM FORCE™ Bridge API ziehst, kannst du mit weiteren Parametern, wie hier dem  Stundensatz und Stückpreis, in Relation setzen. Dies dient nicht nur der Auftragsübersicht und dem Monitoring der aktuellen Operation, sondern gibt dir auch Transparenz über die resultierenden Kosten bzw. Fehlkosten, z.B. in Folge eines Maschinenausfalls. So unterstützt dich das Template bei der Prozessoptimierung in deiner Fertigung und trägt damit zu einer Verbesserung der Produktivität bei.
lang: de
weight: 405
isDraft: false
ref: Forcam-Costs-Overview
category:
  - Alle
  - Forcam
  - Produktion
  - Partner
image: Forcam-Costs-Overview.png
image_thumbnail: Forcam-Costs-Overview_thumbnail.png
download: Forcam-Costs-Overview.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# so funktioniert's

Passe zunächst die URLs der JSON Calls an die [FORCAM API](https://docs.forcebridge.io/) an, um das Dashboard mit deinem FORCAM System zu verbinden. Wiederhole diesen Schritt für alle 5 Calls. Der Call ‘Current_Times’ (3) ist deaktiviert, da er erst die Operation ID von einem anderen Call benötigt. Erst dann kann der Call ausgeführt werden.

![](img/forcam-call-url.png)

Passe anschließend die Authentifizierung an. Gib dafür jeweils deine URL, deine Client ID und deinen Client Secret an. Verwende das FORCAM Preset für weitere Calls an die FORCE Bridge API.

![](img/forcam-oauth-update.png)

Passe nun die Parameter an. Gib an, welchen Workplace du anzeigen lassen willst und hinterlege den Stundensatz deiner Maschine oder deines Workplaces sowie die Stückkosten. Diese Werte kannst du dir natürlich auch aus einem anderen System ziehen. Im Beispiel werden einfache Variablen verwendet.

![](img/forcam-workplace-and-prices.png)

Mit Hilfe eines Touchscreens oder einer Maus und Tastatur kannst du die Workplace Number auch im laufenden Betrieb jederzeit ändern, um so flexibel unterschiedliche Workplaces betrachten zu können. Klicke dafür einfach das Textfeld an, trage die neue Workplace Number ein und klicke zur Bestätigung auf den Button. Solltest du diese Funktion nicht benötigen, kannst du den Button auch ganz einfach entfernen und das Eingabefeld in ein normales Textfeld umwandeln.

![](img/forcam-cost-overview-live-edit.png)
