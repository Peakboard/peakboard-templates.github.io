---
layout: article
title: Digital Bulletin Board With OneDrive
description: 
  - This board displays some company information and helps to inform employees about news. All news, images and the PDF can be managed through a single OneDrive Order. With this template you can create your own digital signage application.
lang: en
weight: 2000
isDraft: true
ref: Digital-Bulletin-Board-With-OneDrive
category:
  - Administration
  - Reception
  - Bulletin Board
image: Digital-Bulletin-Board-With-OneDrive.png
image_thumbnail: DDigital-Bulletin-Board-With-OneDrive_thumbnail.png
download: Digital-Bulletin-Board-With-OneDrive.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# possible data sources

This template was created with images and an Excel file, which are stored in a OneDrive directory. But this is only one possible way and serves only as an example. You could also use this template with the following data sources: Google Spreadsheet, RSS Feed, JSON, XML, CSV, OData, Web Services, REST API, Microsoft Excel, Google Docs, MS SharePoint Lists, Dropbox, Microsoft OneDrive, Google Drive, Microsoft,SharePoint Document Libraries, Microsoft Teams Files or with a local file server.

# how it works

For a general introduction to Peakboard, see the [first steps](https://peakboard.rocks/get-started). If you would like to know how to connect a Peakboard box to your designer and transfer a visualization, please read the following [article](https://peakboard.rocks/connect). To create a visualization you need the Peakboard Designer. This can be downloaded [for free](https://peakboard.com/en/peakboard-designer/?utm_campaign=templates&utm_medium=description_link&utm_source=templates_overview).

To update the content of this template you can download the files from this [Github folder](https://github.com/Peakboard/peakboard-templates.github.io/tree/master/_templates/Digital-Bulletin-Board-With-OneDrive/data-files). Then you have to drop the files in the desired destination. Choose from one of the many cloud services or add them directly to the visualization or use one of them as files in your network, everything is possible. The easiest way is to use one of the cloud services.

If you want to change an image or the displayed PDF file, all you have to do is upload a file with the same name, then the content of the new file will be displayed. This is how our OneDrive folder is off:

![image_live](img/OneDrive-Data-Overview.png)

If you open the file company_data.xlsx you will see two data sheets. The first sheet is used to maintain the data for the lunch menus. You can easily update the rows and add the date, the names of the meals and a price. You will always see the meals from the line with the current date. The second sheet allows you to update the news. The last five lines are always used for the visualization. This is what the Excel file looks like:

![image_live](img/Excel-Data-Structure.png)

After you have placed the files in your desired folder and customized them, you still have to connect Peakboard to the files. To do this you have to open this template in the Peakboard Designer and update the two data sources 'news_excel' and 'food_excel' under Data. Select the desired service and file and click on 'Load data'.

![image_live](img/Excel-Data-Source-Selection.png)

After you have closed this dialog and all required data sources and resources are updated, you should be able to see your data after pressing the 'Preview' button.

## update weather widget

If you do not want to use this weather widget, you can simply delete the element from the visualization in the Peakboard Designer. To do so, right-click on it and select 'Delete'.

If you want to use the weather widget, you can create your own widget with your city at the following address [https://weatherwidget.io/](https://weatherwidget.io/).

You have to define parameters like city, language and the unit.

If you are satisfied with your options, you can click on the button 'Get Code'. In the opened window you will now find the finished code for your personal widget. Copy this code by simply click on the button 'Copy to Clipboard'.

Now go back to the Peakboard Designer and select the control 'Web widget' in the sidebar or click directly on the weather widget.

![image_live](img/select_weather_widget.gif)

In the further sidebar on the right side you will now find some parameters for this element. Click on the '...' button in the item 'HTML-Code' (2). In the opened window you can now replace the existing code with your own code (3).

![image_live](img/web_widget_code.png)

# picture credits

The used images and graphics are from [Freepik](http://freepik.com/) and [Unsplash](https://unsplash.com/). 

- https://image.freepik.com/free-photo/three-starfishes-with-blue-bag-sand_23-2147952978.jpg
- https://image.freepik.com/free-photo/expression-spine-cut-out-injured-brown-hair_1134-954.jpg
- https://image.freepik.com/free-photo/stock-market-forex-trading-graph-graphic-concept_73426-172.jpg
- https://image.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg
- https://image.freepik.com/free-psd/website-design-your-business_24972-394.jpg
- https://unsplash.com/photos/UCQCmt1i5ek
- https://unsplash.com/photos/bRdRUUtbxO0
- https://unsplash.com/photos/DVRXFIH42d0
- https://unsplash.com/photos/h5TDvTDwkBA
- Icons used in PDF [designed by Freepik](http://freepik.com/)