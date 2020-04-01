---
layout: article
title: Corporate Digital Signage for the canteen or the gastronomy
description: 
  - This template is an example how you can create a digital signage application with images. For the example, images like weekly schedules, offers and menus from the gastronomy sector were used. You only have to load your digitalized menus into our template and then you can define in a table at which times which image should be displayed. You can also control the administration, modification and insertion of images and times via the web interface (API) or the app. So you can make adjustments to your visualization at any time.
lang: en
weight: 1000
isDraft: true
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
## How it works
This is a step by step guide on how to create your personal digital signage application with this template. For a general introduction to Peakboard, see the [first steps](https://peakboard.rocks/get-started). If you would like to know how to connect a Peakboard box to your designer and transfer a visualization, please read the following [article](https://peakboard.rocks/connect). To create a visualization you need the Peakboard Designer. This can be downloaded [for free](https://peakboard.rocks/designer-from-welcome-en).

### Digital Signage with individual images
Create as many images as you like and define in a table for each image individually when it should be displayed. 
To replace the images in the template with the images you want to use, you need your own image files (PNG, JPG) in the format 1920x1080 (Only aspect ratio important, images will scale). Simply drag and drop the desired image files onto the left sidebar of the Peakboard Designer. Afterwards you will find the image files in the sidebar under 'Resources'. You can simply delete images that you do not need.

### Setting the variables(-list)
After you have loaded the images into the Peakboard Designer, you can specify which image should be set as the default image, at what time which images should be displayed and for how long they are displayed.

To set a default image, open the string variable 'defaultImage' in the left sidebar of the Peakboard Designer under Variables. In the pop-up, enter the exact name of your default image (including file extension). This default image is activated each time no other image fits in the current timebox.

Furthermore, the display periods for the images can now be defined in the variable list 'screenList'. Enter the exact image name under 'Image (String)' (incl. file extension) and then set the start time under 'visible_from (String)' and the end time under 'visible_until (String)'.

If you want to change the default runtime of the images (10s) with the variable 'screenDurationInSeconds (Number)'. Click on the variable and set the number of seconds under 'Value'.

### Administration via the web interface
Alternatively, you can also manage the runtimes via the web interface, **if you already have a box**. This web interface is a web page that you can access by clicking on 'Manage / Upload' in the 'Home' tab of the Peakboard Designer. In the dialog, select the desired box (you must have already loaded the visualization onto a box). Now click on the button 'Web Interface'. You can learn more about the web interface [here](https://help.peakboard.com/misc/de-web.html). For the login, the login data delivered with the box are required. You will then see a screenshot of your currently running visualization and the variables on the right side. Click on the desired variable and adjust the value.