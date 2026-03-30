---
layout: article
title: Conveyor scale monitoring – Track your material flow in real time
description:
  - This template provides a clear and intuitive visualization for monitoring conveyor belt scales, as commonly used in quarries or raw material processing. It enables the display of key metrics such as current throughput, belt speed, and weight, creating full transparency over the ongoing material flow.

  - In addition to real-time values, the dashboard offers a monthly view that displays daily throughput figures in a structured way. This allows users to track trends over time and quickly identify fluctuations or anomalies.

  - The template was developed in collaboration with the conveyor belt scale manufacturer [MTS](https://www.mts-waagen.de/en/index.html) and is based on real-world industrial requirements. It is ideal for companies looking to monitor their conveying processes, visualize performance data, and make informed decisions based on current and historical daily values.
lang: en
weight: 664
isDraft: false
ref: Conveyor-Flowrate-Monitoring
category:
  - All
  - Interaction
  - Conveyor
  - Hardware
image: Conveyor-Flowrate-Monitoring.png
image_thumbnail: Conveyor-Flowrate-Monitoring_thumbnail.png
video: Conveyor-Flowrate-Monitoring.mp4
download: Conveyor-Flowrate-Monitoring.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# Possible data sources
MTS conveyor belt scales communicate via a Modbus interface, through which measurement data can be read directly. In this template, however, demo data in the form of variable lists is used, allowing it to be used immediately without any hardware connection. Alternatively, other machine-level communication standards such as OPC UA, MQTT, or BACnet can be easily implemented and integrated instead of Modbus.