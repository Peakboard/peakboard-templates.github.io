---
layout: article
title: digital signage reception screen – information dashboard with Microsoft Office 365 calendar connection
description: 
  - "With this template you can easily and quickly design a multifunctional digital reception screen for your visitors. Welcome your customers right at the area of reception with the information they need during their visit on a dynamic reception screen. Connect your Microsoft 365 calendar as a data source to display visitor information such as room occupancy
according to the daily schedule. Add your company logo and design the reception screen in your corporate design - flexible and functional. Download now."
lang: en
weight: 1000
isDraft: true
ref: Reception-Screen-Microsoft-Office-Calendar
carousel: false
category:
  - All
  - Administration
  - Reception
  - Calendar
  - Misc
image: Reception-Screen-Microsoft-Office-Calendar.png
image_thumbnail: Reception-Screen-Microsoft-Office-Calendar_thumbnail.png
download: Reception-Screen-Microsoft-Office-Calendar.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

## How it works

In order to get into the creation of a welcome screen as simple as possible, we offer ready-made templates. This is a step by step guide on how to create your personal welcome screen with these templates. For a general introduction to Peakboard, see the [first steps](https://peakboard.rocks/get-started). If you would like to know how to connect a Peakboard box to your designer and transfer a visualization, please read the following [article](https://peakboard.rocks/connect). To create a visualization you need the Peakboard Designer. This can be downloaded [for free](https://peakboard.com/en/peakboard-designer/?utm_campaign=templates&utm_medium=description_link&utm_source=templates_overview).

### Different variants

The following templates are explained in this article.

#### Simple board with one appointment

![image_live](/assets/images/templates/welcome/Welcome_Screen_Online_Single.jpg)

You can load this visualization on the Peakboard Box, the box does not necessarily need an internet connection. Without an internet connection, external sources such as the weather widget can not be added. This board offers the possibility to display a maximum of one appointment from a table data source. [Template Link](https://templates.peakboard.com/Reception-Screen-Online-Single-Appointment/en)

#### Multiple appointments managed with a table

![image_live](/assets/images/templates/welcome/Welcome_Screen_Online.jpg)

You can load this visualization on the Peakboard Box, the box does not necessarily need an internet connection. Without an internet connection, external sources such as the weather widget can not be used. The board can display up to three appointments. The appointments are stored and managed in a table directly on the Peakboard Box. [Template Link](https://templates.peakboard.com/Reception-Screen-Online/en)

#### Multiple appointments with a MS Office calendar as data source

![image_live](/assets/images/templates/welcome/Welcome_Screen_Online.jpg)

Optically identical to the previous board. The data management does not happen on the box, but works with a Microsoft Office calendar. It supports Microsoft Office 365 accounts and modern (on-premise) Exchange servers that support Microsoft Graph. Access to the calendar must be made via Microsoft, then automatically up to three current appointments are always displayed. [Template Link](https://templates.peakboard.com/Reception-Screen-Calendar-Connection/en)

### Additional template

In addition to the templates described, there is also an alternative welcome screen template: the appointment overview.

#### Appointment Overview with Office 365 calendar connection

![image_live](/assets/images/templates/welcome/Appointments_Overview.png)

This visualization can accommodate up to six appointments. The appointments are managed via a simple Microsoft Office 365 calendar connection. It supports Microsoft Office 365 accounts and modern (on-premise) Exchange servers that support Microsoft Graph. [Template Link](https://templates.peakboard.com/Appointment-Overview-Reception-Desk/en)

### Initial configuration

The initial configuration is a one-time process and is necessary to adapt the general design such as logo, background and weather widget to your needs. If the visualization is right for you, just load it onto your Peakboard Box and you can focus on scheduling.

The following steps describe how you can use these templates with the predefined sources.
If you want, you can also use your Peakboard Box without connecting to the Internet. This template can also be used without an internet connection. Just remove the Weather Widget or use the [Template without internet connection](https://templates.peakboard.com/Reception-Screen-Offline/en) which already comes without this option.

#### Set up Time Server

This setting defines from which data source the Peakboard Box obtains the current time. You can leave the default setting, this invokes the following service for the time: 'time.windows.com'. If you want to use your local time server of your network, you can change it by navigating to the 'Settings / Settings' -> 'Time server / Time server' tab in the top menu bar. Especially if the box has no Internet connection, it is important to deposit the local time server. Just ask your administrator for the address.

#### Set up Weather Widget

If you do not want to use this weather widget, you can simply clear the element from the visualization in the Peakboard Designer. Select it with a right-click and choose 'Delete'.

If you want to use the Weather Widget, you can create your own widget with your city at the following address: [https://weatherwidget.io/](https://weatherwidget.io/).

You can then define parameters such as city, language, the texts to be displayed and the unit.
On the other tabs there are many more ways to customize the weather widget to your needs.

For our visualization we have used the font 'Arial' in the tab 'Options', the icon Set 'Climacons Animated', Forecast Days '3'.
As theme, we used the theme 'Pure' under 'Flat'.

If you are satisfied with your options, you can click on the 'Get Code' button. In the opened window you will now find the finished code for your personal widget. Copy this code by marking it or just click on the 'Copy to Clipboard' button.

Now go back to the Peakboard Designer and select the control 'Web widget (Weather)' in the sidebar or click directly on the weather widget.

![image_live](/assets/images/templates/welcome/select_weather_widget.gif)

In the further sidebar on the right side you will find some parameters for this element. Click on the '...' button under 'HTML code' (2). In the opened window you can now replace the existing code with your created code (3). Insert your created widget there and click on the OK button.

![image_live](/assets/images/templates/welcome/web_widget_code_appointments.png)

#### Update logo 

To replace the Peakboard logo with your desired company logo, you need an image file. Different formats are supported (PNG, JPG). Simply drag and drop the desired image file onto the left sidebar of the Peakboard Designer. Then you will find the image file in the sidebar under the item 'Resources'. Now drag this image file to the current logo, so you can overwrite it. Then you can make adjustments to optimize size and position.

![image_live](/assets/images/templates/welcome/update_logo.gif)

#### Define background

The background for these templates is a control named PhotoFrame. At the beginning 5 pictures are deposited, which are displayed one after the other. If you want to use your own images, just drag and drop them into the designer. Afterwards select in the sidebar under 'Screens' -> 'Screen (Welcome)' the element 'Photo Frame (PhotoFrame_Background)'. Here you can now manage the images to be displayed under the Data Source property. Alternatively, you can of course also remove the PhotoFrame and use a simple image or a solid background. There are no limits.

#### Define default texts

The visualization comes with ready-made texts for the situation that there is no appointment to display.
You can adapt these texts via the variable list 'text_labels'. These changes can be made directly in the Peakboard Designer by double-clicking on the list and clicking on 'Edit' in the dialog. 

Alternatively, you can use the web interface if you already have a box. This web interface is a web page that you can be accessed by clicking on 'Manage / Upload' in the Peakboard Designer 'Home' tab. In the dialog, select the desired box (you must have already loaded the visualization onto a box). Now click on the button 'Webinterface' (1). You can learn more about the webinterface on [this page](https://peakboard.rocks/webinterface).

![image_live](/assets/images/templates/welcome/Manage_Dialog_Webinterface_Button_en.png)

Alternatively, you can also call the web interface directly in your browser with the URL: http://NameYourBox:40404. You must enter the name of your box followed by the port :40404. Login requires the login data supplied with the box. Then you will see a screenshot of your currently running visualization and on the right side (2) various variable lists which you can now change. You can change all displayed source texts in the variable list 'text_labels'. 

![image_live](/assets/images/templates/welcome/Webinterface_Overview.png)

For example, change the greeting text (2) and save it with a click on 'Update'. With the Refresh button you can load a new screenshot of your visualization (3).

![image_live](/assets/images/templates/welcome/Webinterface_Appointment_TextLabels.png)

That's it, you have customized your visualization to your needs. Now you have to upload the visualization to your Peakboard Box. To do this, go to the menu ribbon at the top under the tab 'Home' to the point 'Manage / Upload'. In the following dialog, select your box and click on 'Upload'. Now the visualization is loaded onto your box, after a short time the visualization should be visible on the screen that is connected to the Peakboard Box. If you are satisfied with the result, you can then concentrate on the appointment management. If you have not yet connected your Peakboard Box, it is best to read the following [article](https://peakboard.rocks/connect).

### Manage appointments

Unlike the initial configuration, appointment management is a continuous process. Therefore, this process should meet your requirements. Depending on the data source, appointments can be managed differently. This is done by linking a Microsoft calendar or with tables, via the Peakboard web interface, directly on your box.
Learn more about the web interface [here](https://peakboard.rocks/webinterface). As an alternative to the web interface, you can also use the [Peakboard App](https://peakboard.rocks/apps-en).

Read the description for your selected template.

#### Manage multiple appointments with a MS Office calendar

To be able to use the [visualization with calendar attachment](https://templates.peakboard.com/Reception-Screen-Calendar-Connection/en), you must register your private - or better yet a shared - calendar account into your Microsoft account and activate a share for the necessary information for Peakboard.

Open the visualization file with the Peakboard Designer. Now you can open the calendar data source in the left sidebar (Visualization -> Data -> Calendar). Under the second item 'Authorization status', you must now set up a share for your calendar via the 'Authorize' button. To do this, follow the Windows logon steps and allow Peakboard to access the calendar. Once the authorization has been granted, you can close the dialog with OK, save the visualization. Now upload the current visualization to your Peakboard Box.

![image_live](/assets/images/templates/welcome/activate_office365-calendar.gif)

Subsequently, all current appointments are automatically fetched from the specified Microsoft calendar and displayed up to three. This means that you can simply manage the appointments in your calendar as usual and Peakboard automatically fetches the relevant appointments and presents them. If there is no other appointment for today, the general welcome text from the list 'text_labels' is used.

Peakboard currently supports Microsoft Office 365 accounts and modern on-premise Exchange servers supporting Microsoft Graph. It's best to ask your admin.

### Image credits

These are the links to the images used for the background of the visualization. https://unsplash.com/ is a very interesting project which offers a lot of free usable pictures in high quality. /photos/ib7jwp7m0iA, /photos/io7dX_1EFCg, /photos/wSTCaQpiLtc, photos/OKjSh2rucAQ, / photos/hsPFuudRg5I.
