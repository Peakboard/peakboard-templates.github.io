---
layout: article
title: Forcam Overview of Single Workplace Operation and Cost Overview
description: 
  - This template offers the possibility to get a detailed overview of a single workstation. Data is retrieved from the Forcam ForceBridge API and this data is combined with other parameters, in this case hourly rate and unit price, to get an overview of the current operation and the associated missing costs.
lang: en
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

# This is how it works

To connect this board to your Forcam system, you must first configure the URLs of the JSON calls and the Forcam API. You will have to do this for all 5 calls.

![](img/forcam-call-url.png)

Then you have to adjust the authentication. Enter your URL and your Client ID and Client Secret. If you want to make more calls to the ForceBridge API you can always use the Forcam preset.

![](img/forcam-oauth-update.png)

Afterwards you can adjust a few parameters. First you have to specify which Workplace you want to display and secondly you have to specify what the hourly rate of your machine or Workplace is and how much a single part costs. These values could of course be taken from another system. Here it is simulated with simple variables.

![](img/forcam-workplace-and-prices.png)