---
layout: article
title: 创建交互式清单 —— 显示未完成事项的看板
description: 
  - 利用这一实用的看板，员工可以随时总览所有未处理的任务，更加高效地管理订单或项目。此外，看板还会展示即将完成的任务；员工也可直接了解到该任务的计划完成时间。如果将Peakboard Box与触摸屏相连，还可以记录完成一项任务的所用时间。点击触摸屏，即可将信息保存在SQL服务器；从长远来看，这能帮助您优化各类进程。马上下载，完全免费哦！ 
lang: cn
weight: 1700
isDraft: false
ref: Interactive-Task-Planning-With-SQL
category:
  - 所有
  - 生产制造
  - 精益管理
  - 人机交互
  - Job Production
image: Interactive-Task-Planning-With-SQL.png
image_thumbnail: Interactive-Task-Planning-With-SQL_thumbnail.png
download: Interactive-Task-Planning-With-SQL_CN.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# 如何使用 

在该看板中，您可以根据自身需要修改TasksMetadata列表，轻松地对任务进行个性化设置。

如果您想在模板中使用数据库，只需在数据库中创建一个表格，其格式如何： 

![](img/SQL-Database-Overview.png)

然后在数据源"CurrentTasks"和"TodayTasks"中调整SQL服务器的数据连接，剩下的就交给Peakboard Box吧！


# 可使用的数据源

模板使用SQL数据库，它也展示了如何将数据写回数据库。但也可以使用其他数据系统，例如ODBC, MS SQL Server, MS Access, MS Azure SQL, Oracle数据库, IBM DB2, MySQL, PostgreSQL, MongoDB, Teradata或Wintool；ERP系统也适用于该模板。请在此[here](https://peakboard.com/en/interfaces/)了解完整的列表。
