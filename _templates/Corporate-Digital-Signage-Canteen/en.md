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
In order to get an easy start into the creation of your digital signage application, we offer ready-made templates. This is a step-by-step guide on how to create your personal digital signage application with this template. A general introduction to the Peakboard Designer can be found in 'Get Started' in our Help Center. If you want to know how to connect a Peakboard Box to your designer and how to transfer a visualization, please read the following article. To create a visualization you need the Peakboard Designer. It can be downloaded free of charge.

### Digital Signage with individual images
This visualization offers space for any number of images. For each image, it is possible to define individually in a table, in which time periods they should be displayed. The following formats are supported: PNG, JPG.

### Configuration
The template is designed in such a way that you can quickly implement your first digital signage application with little configuration effort. All you have to do is load your own images into the template, set the times and load the visualization onto your Peakboard Box.

### Upload the images
To replace the images in the template with the images you want to use, you need your own image files (PNG, JPG) in 1920x1080 format. Simply drag and drop the desired image files onto the left sidebar of the Peakboard Designer. Afterwards you will find the image files in the sidebar under 'Resources'. If you do not need the existing images of the template, you can delete them from the template.

### Setting the variable(-list)
After you uploaded the images into the Peakboard Designer, you can specify which image should be set as the default image, at what time which images should be displayed and for how long they should be displayed.

To set a default image, open the string variable 'defaultImage' under Variables in the left sidebar of the Peakboard Designer. In the pop-up, enter the exact name of your default image. This default image is activated each time no other images are to be displayed.

GIF

Furthermore, the display periods for the screens can now be defined in the variable list 'screenList'. To do this, enter the exact name of the image under Image (String) and then specify the start time under visible_from (String) and the end time under visible_until (String).

If you want to change the default runtime of the images (10s), you can do this with the variable ‘screenDurationInSeconds (Number)'. Click on the variable and set the number of seconds under 'Value’.

### Administration via the Web Interface
You can start the web interface directly in your browser with the URL: http://NameIhrerBox:40404 directly in your browser. You have to enter the name of your box, followed by the port :40404. The login requires the login data delivered with the box. Afterwards you will see a screenshot of your currently running visualization (1) and on the right side (2) different variable lists. Here you can now edit the texts in the variable list 'text_labels'. With the refresh button you can load a new screenshot of your visualization (3).

Insert images from web interface

### Setting the time format
If you want to use a different time format than the one used in the template, double-click on 'Time (Time)' in the left sidebar of the Peakboard Designer under 'Data'. Now you can select a new format in the pop-up window under 'Format'. You can also give the time data source a new name or change the time zone if necessary.

GIF 

That's it, you have adapted your visualization to your needs. Now you have to upload the visualization to your Peakboard Box. To do this, go to the menu above under the tab 'Home' and select 'Manage / Upload'. In the following dialog, select your box and click on 'Upload'. Now the visualization will be uploaded to your box. After a short time the visualization should be visible on the screen connected to the Peakboard Box. If you have not yet connected your Peakboard Box, please read the following article.