---
layout: article
title: early detection of problems with the help of an AI model
description: 
  - This template uses an AI model in the Azure Cloud to recognize when the probability of a faulty production increases. Two measured values are transmitted to an AI model and the calculated probability is returned as a value with the help of the JSON data source. With this value you can quickly make the current situation visible and react early enough to completely avoid misproduction.
lang: en
weight: 1700
isDraft: true
ref: AI-Anomaly-Detection
category:
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

Two measured values are simulated with a script and sent to the model. In a real scenario a sensor would deliver these values. As soon as the model receives the values, it calculates the probability of failure and returns this value to the board. This is then displayed and helps to identify problems quickly and to react early in order to completely avoid missing parts that are outside the tolerance.