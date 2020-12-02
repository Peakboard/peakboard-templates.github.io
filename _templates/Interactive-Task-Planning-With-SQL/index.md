---
layout: article
title: deine interaktive aufgabenplanung – mit einem klick alle informationen in SQL gesichert
description: 
  - "Mit diesem Template kannst du deine Aufgabenplanung schnell und elegant organisieren. Die Zeiten von ausgedruckten Excel Dateien sind vorbei. Die Aufgabenzeiten werden direkt in einem SQL-Server persistiert. So kannst du jederzeit einsehen wie lange ein Auftrag dauerte und welche Aufgaben optimiert werden müssen. Die Daten kannst du somit jederzeit mit anderen Tools auswerten und überall nutzen, um bspw. deine Shopfloor Meetings zu optimieren."
lang: de
weight: 1700
isDraft: true
ref: Interactive-Task-Planning-With-SQL
category:
  - Produktion
  - Lean Management
  - Interaktion
  - Einzelfertigung
image: Interaktiv-Aufgaben-Abhaken-SQL-Datenbank.png
image_thumbnail: Interaktiv-Aufgaben-Abhaken-SQL-Datenbank_thumbnail.png
download: Interaktiv-Aufgaben-Abhaken-SQL-Datenbank.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# so funktioniert's 

Bei dem Beispiel kannst du die Aufgaben über die Liste „TasksMetadata“ ganz einfach für deine Bedürfnisse anpassen.

Wenn du das Template mit deiner Datenbank aufbauen willst, kannst du einfach eine Tabelle in der Datenbank in der folgenden Form anlegen: 

![](img/SQL-Database-Overview.png)

Jetzt noch schnell die Verbindungsdaten zum SQL-Server in den Datenquellen „CurrentTasks“ und „TodayTasks“ an euren SQL Server anpassen. Alles weitere übernimmt eure Peakboard Box!

# mögliche datenquellen

Dieses Template verwendet eine SQL Datenbank. Es zeigt auch wie Daten in eine Datenbank geschrieben werden können. Es könnten aber auch andere Systeme verwendet werden, wie z.B. ODBC, MS SQL Server, MS Access, MS Azure SQL, Oracle Database, IBM DB2, MySQL, PostgreSQL, MongoDB, Teradata oder Wintool. Auch ein ERP Systeme könnte sich dafür eignen. Eine Auflistung an möglichen Datenquellen findest du [hier](https://peakboard.com/produkt/peakboard-versionen/#schnittstellen).