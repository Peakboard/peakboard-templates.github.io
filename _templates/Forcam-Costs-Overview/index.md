---
layout: article
title: Forcam-Übersicht einzelner Arbeitsplatz mit Operation und Kostenübersicht
description: 
  - Dieses Template bietet die Möglichkeit eine detaillierte Übersicht über einen einzelnen Arbeitsplatz zu bekommen. Es werden Daten aus der Forcam ForceBridge API geholt und diese mit weiteren Parametern, in diesem Fall Stundensatz und Stückpreis verrechnet um so eine Übersicht über die aktuelle Operation und die dazugehörigen Fehlkosten zu erhalten.
lang: de
weight: 2000
isDraft: true
ref: Forcam-Costs-Overview
category:
  - Forcam
  - Production
image: Forcam-Costs-Overview.png
image_thumbnail: Forcam-Costs-Overview_thumbnail.png
download: Forcam-Costs-Overview.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# So funktioniert's

Um dieses Board mit deinem Forcam System zu verbinden musst du erst die URLs der JSON Calls and die Forcam API anpassen. Dies musst du für alle 5 Calls wiederholen.

![](img/forcam-call-url.png)

Anschließend musst du die Authentifizierung anpassen. Gib jeweils deine URL an und deine Client ID und deinen Client Secret. Wenn du noch weitere Calls an die ForceBridge API machen willst kannst du immer das Forcam Preset verwenden.

![](img/forcam-oauth-update.png)

Anschließend kannst du noch ein paar Parameter anpassen. Zum einen musst du angeben, welchen Workplace du anzeigen lassen willst und zum anderen musst du noch angeben was der Stundensatz deiner Maschine oder deines Workplaces ist und weiß ein einzelnes Teil kostet. Diese Werte könnten natürlich auch aus einem anderen System gezogen werden. Hier wird es mit einfachen Variablen simuliert.

![](img/forcam-workplace-and-prices.png)