---
layout: article
title: deine digitale to do liste – verwalte aufgaben via interaktivem dashboard
description: 
  - Mit diesem praktischen Template hast du deine To-dos im Blick und verwaltest Aufträge oder Projekte noch effizienter. Darüber hinaus werden dir deine nächsten zu erledigenden Aufgaben angezeigt und du siehst direkt wie viel Zeit dafür geplant ist. Schließe deine Peakboard Box an einen Touchscreen, um festzuhalten wie lange du pro Aufgabe gebraucht hast. Mit einem Klick auf den Touchscreen werden diese Informationen in einem SQL-Server gesichert und helfen dir dabei Prozesse nachhaltig zu optimieren.
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
