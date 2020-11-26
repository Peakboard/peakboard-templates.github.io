---
layout: article
title: digital bulletin board with excel
description: 
  - Bulletin board 3.0 – keeping employees up to date with an electronic bulletin board. Whether it's general internal communication, the weather, birthdays, announcements, notices or room allocation plans, you remain completely flexible with regards to media formats, documents and messages. All allocation plans and birthdays can be managed via an Excel file. PDF documents only have to be added to the dashboard directory. Digital signage made easy.
lang: en
weight: 1900
isDraft: false
ref: Digital-Bulletin-Board-with-Excel
category:
  - Administration
  - Reception
  - Bulletin Board
image: Digital-Bulletin-Board-with-Excel.png
image_thumbnail: Digital-Bulletin-Board-with-Excel_thumbnail.png
download: Digital-Bulletin-Board-with-Excel.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

# possible data sources

The template was created using an Excel file in the dashboard directory. Many other data sources are possible, such as Google Spreadsheet, RSS Feed, JSON, XML, CSV, OData, Web Services, REST API, Microsoft Excel, Google Docs, MS SharePoint Lists, Dropbox, Microsoft OneDrive, Google Drive, Microsoft,SharePoint Document Libraries, Microsoft Teams Files, a local file server and [more](https://peakboard.com/en/data-connections/).

# how it works

Find a general introduction to Peakboard [here](https://peakboard.rocks/get-started). If you want to know how to connect the Peakboard Designer to your Peakboard Box and how to transfer your visualization accordingly, the following [article](https://peakboard.rocks/connect) will help you. Download the [Peakboard Designer](https://peakboard.com/en/peakboard-designer/?utm_campaign=templates&utm_medium=description_link&utm_source=templates_overview) for free.

Download the files from [Github](https://github.com/Peakboard/peakboard-templates.github.io/tree/master/_templates/Digital-Bulletin-Board-with-Excel/data-files) to update the content of the template. Save the files in the desired location. You can store your files e.g. in one of the numerous cloud services offered. This way, they are always updated when you update the files in the respective cloud service. You can also add the files directly to the visualization by adding them to the Peakboard file.

## weather widget update
If you do not want to use the weather widget, simply delete the element from the visualization in the Peakboard Designer by selecting it with a right-click and clicking on 'Delete'.

If you want to use the weather widget, create your own widget with your city at the following address: [https://weatherwidget.io/](https://weatherwidget.io/).

Specify the parameters like city, language and unit.

When satisfied with the options click on the button 'Get Code'. In the opened window you will now find the ready code for your personal widget. Copy this code by simply clicking on the button 'Copy to Clipboard'.

Now go back into the Peakboard Designer and select the control 'Web widget' in the sidebar or click directly on the weather widget.

![image_live](img/select_weather_widget.gif)

In the sidebar on the right side you will find some parameters for this element. Click on the '...' button in the item 'HTML-Code' (2). In the opened window you can now replace the existing code with your own code (3).

![image_live](img/web_widget_code.png)

## departure information
The departure information gives employees permanent knowledge about the departure of the city trains. This information can be managed by an API provided from the Deutsche Bahn. The API kann be found here: [https://developer.deutschebahn.com/store/apis/info?name=Timetables&version=v1&provider=DBOpenData/](https://developer.deutschebahn.com/store/apis/info?name=Timetables&version=v1&provider=DBOpenData/).

You have to register yourself in order to get your unique authentification token - the registration is free of charge and the token will always be valid, according to the settings choosen.

Then you add a XML Data and write in the "Path" field the desired API-URL. Next you set the authentification typo to "Bearer" and you enter the token in the shown field.

When you have done this, specify the path to your desired information and load the data.