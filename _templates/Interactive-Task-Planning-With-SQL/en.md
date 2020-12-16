---
layout: article
title: create an interactive task list – your dashboard for open to dos
description: 
  - Easily manage orders or projects with this handy template. Download it for free and create a practical digital to do list to keep open tasks in sight. In addition, you can see your next scheduled tasks and how much time is planned for each of them. Connect your Peakboard Box to a touchscreen to record how long you took per task. With one click this information is saved in a SQL server and helps you to optimize processes sustainably.
lang: en
weight: 1700
isDraft: true
ref: Interactive-Task-Planning-With-SQL
category:
  - Production
  - Lean Management
  - Interaction
  - Job Production
image: Interactive-Task-Planning-With-SQL.png
image_thumbnail: Interactive-Task-Planning-With-SQL_thumbnail.png
download: Interactive-Task-Planning-With-SQL.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# this is how it works 

In this example, you can easily customize the tasks to your needs using the TasksMetadata list.

If you want to build the template with your database, you can simply create a table in the database in the following form: 

![](img/SQL-Database-Overview.png)

Now quickly adjust the connection data to the SQL server in the data sources "CurrentTasks" and "TodayTasks" to your SQL server. Everything else is done by your Peakboard Box!


# possible data sources

This template uses a SQL database. It also shows how to write back data into a database. But other systems could be used as well, such as ODBC, MS SQL Server, MS Access, MS Azure SQL, Oracle Database, IBM DB2, MySQL, PostgreSQL, MongoDB, Teradata or Wintool. An ERP system could also be suitable for this. A list of possible data sources can be found [here](https://peakboard.com/en/product/peakboard-versions/#dataconnections).
