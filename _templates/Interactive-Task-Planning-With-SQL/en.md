---
layout: article
title: your interactive task planning - with one click all information is saved in SQL
description: 
  - "With this template you can quickly and elegantly organize your task planning. The times of printed Excel files are over. The task times are directly persisted in a SQL server. So you can always see how long a task took and which tasks need to be optimized. You can evaluate the data at any time with other tools and use it everywhere to optimize your store floor meetings, for example."
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