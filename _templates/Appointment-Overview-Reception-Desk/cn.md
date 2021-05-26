---
layout: article
title: 接待处展示的房间使用和预约情况概览
description: 
  - 该可视化提供了当前预约及对应的房间使用概览。您可以将其连上微软365日历并修改图标，若有必要，还可以调整天气插件，使其满足您的需求。
lang: cn
weight: 1000
isDraft: false
ref: Appointment-Overview-Reception-Desk
carousel: true
category:
  - Recommended
  - Administration
  - Reception
image: Appointment-Overview-Reception-Desk_CN.png
image_thumbnail: Appointment-Overview-Reception-Desk_CN_thumbnail.png
download: Appointment-Overview-Reception-Desk_CN.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---

## 如何使用

为了尽可能简化欢迎看板的制作过程，我们提供了成品模板。通过这一制作指南，我们帮助您一步步在这些模板的基础上创建自己的个性化欢迎看板。要想对Peakboard有一个大致了解，请访问[简介](https://peakboard.rocks/get-started)。如果您想知道如何将Peakboard Box连至Designer软件，并上传可视化看板，请查阅以下[文档](https://peakboard.rocks/connect)。如要创建可视化，您需要使用Peakboard Designer软件。该软件可在此免费[下载](https://peakboard.rocks/designer-from-welcome-en)。

### 使用Office365日历作为数据源，创建预约情况概览

![image_live](/assets/images/templates/welcome/Appointments_Overview.png)

可视化看板最多可显示六个预约。只需简单地将其连接微软Office 365日历，即可对这些预约进行管理。看板支持微软Office 365账号和支持微软图表的现代化（公司内部）Exchange服务器。[模板链接](https://templates.peakboard.com/Appointment-Overview-Reception-Desk/en)

### 其他相似模版

以下模板可与之前描述的预约概览替换使用。

#### 简单的单个预约看板

![image_live](/assets/images/templates/welcome/Welcome_Screen_Online_Single.jpg)

您可以将该可视化加载至Peakboard Box，而Box不一定需要连接网络。在未联网的情况下，将无法添加外部资源（例如天气插件）。该看板最多可显示表中的一个预约。[模板链接](https://templates.peakboard.com/Reception-Screen-Online-Single-Appointment/en)

#### 用表管理多个预约

![image_live](/assets/images/templates/welcome/Welcome_Screen_Online.jpg)

您可以将该可视化加载至Peakboard Box，而Box不一定需要连接网络。在未联网的情况下，将无法添加外部资源（例如天气插件）。该看板最多可显示三个预约，这些信息都直接存储在Peakboard Box表中，您也可以通过表对其进行管理。[模板链接](https://templates.peakboard.com/Reception-Screen-Online/en)

#### 使用Office365日历作为数据源，展示多个预约

![image_live](/assets/images/templates/welcome/Welcome_Screen_Online.jpg)

表面上看，该看板与上一个看板非常相似。然而，它并非通过Box管理预约，而是使用微软Office日历。看板支持微软Office 365账号和支持微软图表的现代化（公司内部）Exchange服务器；您必须通过微软访问日历，之后至多三个当前预约就会自动显示出来。[下载链接](https://templates.peakboard.com/Reception-Screen-Calendar-Connection/en)

### 初始配置

初始配置是一个一次性过程，要让常用设计，例如图标、背景和天气插件等符合您的需求，该过程就很有必要。如果您对设计的可视化比较满意，就可以将其上传至Peakboard Box，然后重点关注如何管理预约。

#### 设置时间服务器

此设置决定了Peakboard Box应从哪一数据源获取当前时间。默认情况下，系统会触发'time.windows.com'时间服务，您可以使用这一默认设置。如果您想使用公司网络的本地时间服务器，可以打开顶部菜单，选择“设置” ——> “时间服务器”加以修改。尤其是当Box未联网时，设置好本地时间服务器就非常重要。如果不知道服务器地址，可以询问管理员。

#### 更新天气插件

如果您不想使用天气插件，可以直接在Peakboard Designer中将该元素从可视化中移除。选中元素，点击鼠标右键，选择“删除”。

如果需要使用天气插件，您可以使用以下地址，创建所在城市的个性化插件：[https://weatherwidget.io/](https://weatherwidget.io/)。

首先，选择所在城市；随后，设定其他参数，例如语言、显示文本和温度单位。另外，其他标签也提供多种方式，让您对天气插件进行满足自身需求的个性化设置。

在可视化示例中，我们使用“选项”标签中的‘Arial’字体，图标设定为‘Climacons Animated’，预报天数为‘3’，主题则为‘Flat’系列中的‘Pure’主题。

如果您对设定的选项比较满意，可以点击“获取代码”按钮。在打开的窗口中，就可以看到为您个性化插件编写的代码。选中代码部分，即可进行复制；或者，您也可以点击“复制到粘贴板”按钮，方便快捷。

随后，回到Peakboard Designer软件界面，选择侧边栏中的“网页插件（天气）”控件，或者直接点击天气插件。

![image_live](/assets/images/templates/welcome/select_weather_widget.gif)

接下来，该元素的相关参数会显示在右侧侧边栏。点击‘HTML代码’后面的‘...’按钮(2)，弹出窗口之后，您就可以用之前创建的代码替代已有代码（3）。在此添加创建的插件，然后点击“完成”。

![image_live](/assets/images/templates/welcome/web_widget_code_appointments.png)

#### 更新图标

如需用自己公司图标替换Peakboard图标，需要添加一个图片文件。软件支持不同的图片格式（PNG、JPG），只需将图片文件拖拽至Peakboard Designer左侧侧边栏，之后您就可以在侧边栏“资源”中找到该文件。随后，将文件拖到当前图标进行覆盖，并调整大小和位置，以取得最佳效果。

![image_live](/assets/images/templates/welcome/update_logo.gif)

#### 定义默认文本

该可视化看板提供制作好的文本，以用于无预约可显示的情况。您可以通过变量列表‘text_labels’对这些文本加以修改：在Peakboard Designer软件界面双击这一列表，然后点击对话框中的“编辑”。

另外，如果您拥有Peakboard Box，也可以使用Webinterface。该选项是一个网页，您可以在“主页”标签中点击“管理/上传”，之后就可访问该网页。在对话框中，选择对应Box（您必须提前将可视化加载至Box），点击Weninterface（1）。您可以在[此页面](https://peakboard.rocks/webinterface)了解更多详情。

![image_live](/assets/images/templates/welcome/Manage_Dialog_Webinterface_Button_en.png)

第三种方法，您也可以直接在浏览器中输入网址http://NameYourBox:40404调用该页面。在此必须输入Box名称，并使用40404端口。您需要使用随Box一同提供的登录信息进行登录。随后，就可以看到当前运行可视化的截图；右侧（2）则显示出各个变量列表，您可以在此进行修改。所有显示的源文本均可在变量列表text_labels中修改。

![image_live](/assets/images/templates/welcome/Webinterface_Overview.png)

例如，修改问候文本（2），点击“更新”，保存更改。点击“更新”(3)之后，您就可以看到可视化的最新截图。

![image_live](/assets/images/templates/welcome/Webinterface_Appointment_TextLabels.png)

大功告成，您已经成功完成个人可视化看板的定制！然后，您还需要将可视化上传至Peakboard Box。将鼠标移至顶部菜单栏，打开“主页”标签，点击“管理/上传”；在接下来的对话框中，选中您的Box，并点击“上传”，可视化就被加载至Box。片刻之后，可视化就会显示在与Peakboard Box连接的屏幕上。如果您对结果感到满意，就可以将注意力放在预约管理；如果您还没有连接Peakboard Box，建议参考以下[文档](https://peakboard.rocks/connect)。

### 管理预约

要使用[带日历附件的可视化](https://templates.peakboard.com/Reception-Screen-Calendar-Connection/en)，您必须在自己的微软账户中注册一个个人，最好是共享的日历账号，并为Peakboard激活相关必要信息。

使用Peakboard Designer软件打开可视化文件，您就可以在左侧侧边栏添加日历数据源（可视化——>数据——>日历）。在第二项“授权状态”，您必须通过“授权”按钮选择日历中用于分享的信息。为此，完成Windows登录步骤，允许Peakboard访问日历；获得授权之后，点击“完成”，关闭对话框，并保存可视化，将其上传至Peakboard Box。

![image_live](/assets/images/templates/welcome/activate_office365-calendar.gif)

随后，系统就会自动从授权的微软日历中拉取当前所有预约，并最多显示三项。这意味着您可以像平常一样在日历中管理这些预约，Peakboard会自动获取相关信息并展示出来。如果当日没有预约，Peakboard就会使用text_labels列表中的一般问候文本。

Peakboard目前支持微软Office 365账号和支持微软图表的现代化（公司内部）Exchange服务器，具体细节请咨询公司网络管理员。
