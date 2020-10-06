---
layout: article
title: Forcam Andon Board with ForceBridge API
description: 
  - This board uses a connection to the ForceBridge API from Forcam. Values for three workplaces are retrieved from the API and displayed in the form of an Andon Dashboard.
lang: en
weight: 2000
isDraft: true
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

Adjust the URLs for the API calls to your system. You must do this for all 9 API calls.

![](img/forcam-edit-json-call-url.png)

 Now you have to adjust the authentication and change your Token URL and your Client ID and Client Secret respectively. If you want to create a new call to the API, you can always select the Forcam preset during authentication.

 ![](img/forcam-edit-authentication.png)

 Finally, you only need to adjust the Workplace Number variables and specify the 3 workplaces you want to have in mind for the board.

 ![](img/forcam-edit-workplace-number.png)

