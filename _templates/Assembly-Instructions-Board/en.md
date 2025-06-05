---
layout: article
title: Your worker assistance system for efficient assembly
description: 
  - This application acts as a operator assistance system and enables efficient and error-free assembly. The interactive dashboard initially provides an overview of the progress of all open assembly orders. When an order is selected by clicking on its tile using a touchscreen or a mouse connected to the Peakboard Box, the worker receives step-by-step instructions for assembling the particular product. The instructions are conveyed by descriptive text, images, technical drawings, and a list of materials. 

  - Various parameters are recorded during assembly to monitor and evaluate the production process. This includes recording the time required and counting the OK and NOK parts at the end of assembly. This data is used for quality control and makes it possible to optimize your production process and make possible improvements more quickly.

  - In addition, the dashboard offers the option of directly reordering required materials in internal warehouse logistics or reporting problems to those responsible for production.

  - With this dashboard, workers can increase their productivity, minimize errors, and ensure smooth assembly. Likewise, new company employees can now get started in assembly without a great deal of training. 

lang: en
weight: 589
isDraft: false
ref: Assembly-Instructions-Board
category:
  - All
  - Shopfloor
  - Production
  - Interaction
  - Assembly
  - Peakboard Hub
image: Assembly-Instructions-Board.gif
image_thumbnail: Assembly-Instructions-Board_thumbnail.png
download: Assembly-Instructions-Board.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# Possible data sources
This template uses four different Peakboard Hub lists as the data source. The "Products" list contains master data for all products that your company manufactures. The "Materials" list contains master data for all materials that are kept in your warehouse and that are required to manufacture your products. The “Bill of materials” list contains data on the materials from which the individual products are made. The "Assembly steps" list contains data on the individual assembly steps of all products. To use this template with your own Peakboard Hub, you can download the table structure of the particular lists via the following links: <a href="Template_Assembly_Board_Products.csv" class="inline" download>Products</a> , <a href="Template_Assembly_Board_Materials.csv" class="inline" download>Materials</a> , <a href="Template_Assembly_Board_BillOfMaterials.csv" class="inline" download>Bill of materials</a> , <a href="Template_Assembly_Board_Assembly_Steps.csv" class="inline" download>Assembly steps</a>. Import these into Peakboard Hub and then adjust the data sources in the template accordingly. As an alternative to Peakboard Hub lists, this data could also come from one or more databases.

# Overview of current assembly jobs
The dashboard provides an overview of all open assembly orders. Clicking on the respective tile opens the corresponding assembly instruction.
![image_live](Assembly-Instructions-Board-Orders.png)
