---
layout: article
title: Forcam Andon Board mit ForceBridge API
description: 
  - Diese Board verwendet eine Anbindung an die ForceBridge API von Forcam. Es werden zu drei Workplaces jeweils Werte zur Operation und zur Gesamtanlageneffektivität (GAE / OEE) von der API abgerufen und in Form eines Andon Dashboards dargestellt. 
lang: de
weight: 2000
isDraft: true
ref: Forcam-Andon-Board
category:
  - Forcam
  - Produktion
  - Andon
  - OEE / GAE
image: Forcam-Andon-Board.png
image_thumbnail: Forcam-Andon-Board_thumbnail.png
download: Forcam-Andon-Board.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# So funktioniert's

Passe jeweils bei den API calls die URLs auf dein System an. Dies musst du für alle 9 API Calls durchführen.

![](img/forcam-edit-json-call-url.png)

 Nun musst du die Authentifizierung anpassen und deine Token URL und jeweils deine Client ID und deinen Client Secret anpassen. Wenn du einen neuen Call an die API anlegen willst, kannst du bei der Authentifizierung immer das Forcam Preset auswählen.

 ![](img/forcam-edit-authentication.png)

 Abschließend musst du nur noch die Workplace Number Variablen anpassen und jeweils deine 3 Workplaces angeben die du für das Board im Auge haben willst.

 ![](img/forcam-edit-workplace-number.png)
