---
layout: article
title: gastronomy ordering system - order drinks and snacks directly at the table with a touchscreen
description: 
  - This template makes it possible to provide a touchscreen on every table within a bar or restaurant and let customers order with a simple touch. All orders will then be sent to a given e-mail address.
lang: en
weight: 800
isDraft: true
ref: Bar-Table-Order-Touchscreen
category:
  - Interaction
  - Misc
image: Bar-Table-Order-Touchscreen.png
image_thumbnail: Bar-Table-Order-Touchscreen_thumbnail.png
download: Bar-Table-Order-Touchscreen.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# possible data sources

This template uses simple variable lists as data source. Variable lists is the possibility to store simple parameters directly on the box. You could also create this visualization in many other ways and use other data sources that are easier to manage. For example: JSON, XML, CSV, ODBC, Microsoft SQL Server, MS Access, MySQL, Microsoft Excel, Google Docs / Spreadsheet, Microsoft SharePoint lists and much more.

# how it works

Adjust the variable 'MailReceiver' under Variables and enter your e-mail. Every order will be sent to this address when someone clicks on 'Order'. With the help of the variable lists 'Products0', 'Products1', 'Products2' and 'Products3' you can enter the desired products including prices. With the variable 'TableNumber' you can assign an individual table number for each screen. 

![](img/change-email-variable.png)

With multiple screens, it makes all the more sense to store and manage drinks and food in a cloud service using a central data source, such as Excel.