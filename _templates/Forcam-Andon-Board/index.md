---
layout: article
title: FORCAM andon-board mit FORCAM FORCE bridge API
description: 
  - In der Produktion wird ein Andon-Board als visuelles Monitoring am Shopfloor eingesetzt, um den Produktionsstatus einer Produktionslinie bzw. eines Produktionssystems darzustellen.  Fertigungsprozesse können so ganz einfach optimiert werden. Dieses Template verwendet eine Anbindung an FORCAM FORCE, der IT-Plattform für das industrielle Internet der Dinge (IIoT) von FORCAM. Es werden drei Workplaces in Echtzeit visualisiert. Die Prozessdaten und Daten zur Gesamtanlageneffektivität (GAE / OEE) werden über die FORCE Bridge API von FORCAM abgerufen und als Andon Dashboard dargestellt. 
lang: de
weight: 1800
isDraft: false
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
# so funktioniert's

Dieses Template verwendet die Forcam [ForceBridge API](https://docs.forcebridge.io/).

Passe bei den API Calls die jeweilige URL an dein System an (in Summe sind es 9 API Calls). 

![](img/forcam-edit-json-call-url.png)

Passe anschließend die Authentifizierung, deine Token URL und jeweils deine Client ID und deinen Client Secret an. Wenn du einen neuen Call an die API anlegen willst, kannst du bei der Authentifizierung immer das FORCAM Preset auswählen. 

![](img/forcam-edit-authentication.png)

Passe abschließend die Workplace Number Variablen an und gib deine 3 Workplaces an, die du auf deinem Dashboard visualisieren möchtest.

![](img/forcam-edit-workplace-number.png)