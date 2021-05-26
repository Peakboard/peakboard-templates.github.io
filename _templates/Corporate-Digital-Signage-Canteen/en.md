---
layout: article
title: digital signage menu board – your dashboard for company canteen or gastronomy
description: 
  - Display advertising in your corporate design! This template shows how you can easily create a digital signage application with individual images. Load images of your choice into the visualization and define which image should be displayed when. Your individual images and times can be managed via the Peakboard Designer as well as via the API (web interface or Peakboard App). The flexible display options allow you to configure the template according to your needs and to match your restaurant as well as your target group. Download directly and display menus, pricing, or promotions! Let's get started.
lang: en
weight: 1000
isDraft: false
ref: Corporate-Digital-Signage-Canteen
category:
  - Administration
  - Reception
  - Digital Signage
image: Corporate-Digital-Signage-Canteen.png
image_thumbnail: Corporate-Digital-Signage-Canteen_thumbnail.png
download: Corporate-Digital-Signage-Canteen.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
## How it's done
This is a step by step guide on how to create your personal digital signage application using this template. For a general introduction to Peakboard, see the [first steps](https://peakboard.rocks/get-started). If you would like to know how to connect a Peakboard Box to your Peakboard Designer and transfer a visualization, please read the following [article](https://peakboard.rocks/connect). To create a visualization you will need the Peakboard Designer, which can be downloaded [for free](https://peakboard.com/en/peakboard-designer/?utm_source=templates_overview&utm_medium=description_link&utm_campaign=templates).

### Digital Signage with individual images
In order to replace the predefined images in the template with your own images, simply drag your file of choice (PNG, JPG) onto the left sidebar of the Peakboard Designer. Your image files will be saved under 'Resources'. You can simply delete any images that you do not need.

![image_live](assets/screenshot_variables_resources.png)

### Setting the variables
You can manage the visualization using the variables in the left sidebar of the Peakboard Designer. In the variable list 'screenList' you can define the display periods for each image. Enter the exact file name (incl. file extension) under 'Image (String)' and then define the start time under 'visible_from (String)' and the end time under 'visible_until (String)'.

Use the string variable 'defaultImage' and enter the exact name of your default image in the pop-up (including file extension). This image is displayed if no other image is defined in the 'screenList' for the current time.

Click on the variable 'screenDurationInSeconds (Number)' and set the number of seconds under 'Value' to change the default runtime of your images. 

### Administration via the web interface
If you already own a Peakboard Box, you can also manage the runtime via the web interface, which you can acces by clicking on 'Manage / Upload' in the 'Home' tab of the Peakboard Designer. In the dialog, select the desired box (you must have already loaded the visualization onto a Peakboard Box). Now click on the button 'Web Interface'. Learn more about the web interface [here](https://help.peakboard.com/misc/de-web.html). In order to login, the data delivered with the Peakboard Box are required. After log in, you will see your visualization and the variables on the right side. Simply click on the desired variable and adjust the value as desired.

### Image credits
Download a variety of high quality stockphotos on https://unsplash.com/. Images used: /photos/ykThMylLsbY, /photos/H5Hj8QV2Tx4, /photos/uVPV_nV17Tw, /photos/MqT0asuoIcU, /photos/5KS7T3Gs3CA, /photos/9J7sHieVFi0, /photos/8Nc_oQsc2qQ.