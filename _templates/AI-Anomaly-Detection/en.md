---
layout: article
title: stay one step ahead – how to avoid misproduction using AI
description: 
  - This template uses an AI model in the Azure Cloud to detect when an anomaly occurs in production, increasing the likelihood of a misproduction. To do this, two measured values are sent to an AI model and checked for anomalies using the JSON data source. This value serves as an indicator for the quality of the production and allows you to detect and avoid misproduction in time. The Dahsboard shows you negative values in an easily understandable way and at a glance, so that employees and co-workers can react independently and immediately to avoid faulty production parts. Save time and costs in your production and download our template for free.
lang: en
weight: 1700
isDraft: false
ref: AI-Anomaly-Detection
category:
  - All
  - Production
  - Maintenance
image: AI-Anomaly-Detection.png
image_thumbnail: AI-Anomaly-Detection_thumbnail.png
download: AI-Anomaly-Detection.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# how it works

This template uses an AI model from [Paiqo](https://paiqo.com/de/). This model runs in the Azure cloud. 

Two measured values are simulated with a script and sent to the model. In a real scenario, these would be two values from sensors. As soon as the model receives the values, it calculates a value for the anomaly rating and returns this value to the board. This is then displayed and helps to identify problems quickly and to react early in order to completely avoid missing parts that are outside the tolerance.
