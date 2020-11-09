---
layout: article
title: FORCAM andon board with FORCAM FORCE™ bridge API
description: 
  - In the production area, an andon board is used as a monitoring tool on the shopfloor to visualize the production status of an assembly line or manufacturing system. For an easy optimization of production processes. This template uses a connection to FORCAM FORCE™, FORCAM's IT platform for the industrial Internet of Things (IIoT). Three workplaces are visualized in real-time. Process data and data on overall equipment efficiency (OEE) is retrieved via FORCAM's FORCE™ Bridge API and visualized on an andon dashboard.
lang: en
weight: 1800
isDraft: false
ref: Forcam-Andon-Board
category:
  - Forcam
  - Production
  - Andon
  - OEE
image: Forcam-Andon-Board.png
image_thumbnail: Forcam-Andon-Board.png
download: Forcam-Andon-Board.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# how it works

This template uses the FORCAM FORCE™ [Bridge API](https://docs.forcebridge.io/).

Adjust the URL of the individual API calls to your system (in total there are 9 API calls). 

![](img/forcam-edit-json-call-url.png)

In a second step, adjust the authentication, your Token URL, your Client ID and your Client Secret. If you want to create a new call to the API, you can always select the FORCAM preset for the authentication. 

![](img/forcam-edit-authentication.png)

Finally, adjust the Workplace Number variables and enter the 3 workplaces that you want to visualize on your dashboard.

![](img/forcam-edit-workplace-number.png)