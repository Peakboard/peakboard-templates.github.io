---
layout: article
title: manufacturing analytics dashboard - workplace overview with connection to FORCAM FORCE™
description: 
  - This template gives you a detailed overview of the manufacturing process at a single workstation. It is connected to FORCAM FORCE™, FORCAM's IT platform for the industrial Internet of Things (IIoT). Pull the production data from the FORCAM FORCE™ Bridge API and relate it to other parameters, such as hourly rate and unit price. Get a full order status overview and operation monitoring in real time. What's more, get transparency about the resulting costs i.e. loss, e.g. due to machine malfunction. This template supports your process optimization and contributes to an improvement in your profitability.
lang: en
weight: 1800
isDraft: false
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

# how it works

In a first step, adapt the URLs of the JSON calls to the [FORCAM API](https://docs.forcebridge.io/) to connect the dashboard to your FORCAM system. Repeat this step for all 5 calls. The call 'Current_Times' (3) is disabled because it needs the operation ID from another call first. Only then the call can be executed.

![](img/forcam-call-url.png)

Adjust the authentication afterwards. Enter your URL, your Client ID and your Client Secret. Use the FORCAM preset for further calls to the FORCE Bridge API.

![](img/forcam-oauth-update.png)

Adjust the parameters in a next step. Specify which workplace you want to display and enter the hourly rate of your machine or workplace as well as the unit costs. You can of course also get these values from different systems. The example uses simple variables.

![](img/forcam-workplace-and-prices.png)

Change the workplace number at any time, even during operation, with the help of a touch screen or a mouse and keyboard to view other workplaces. Just click on the text field, enter the new workplace number and click on the button to confirm. If you don't need this function, simply remove the button and convert the input field into a normal text field.

![](img/forcam-cost-overview-live-edit.png)