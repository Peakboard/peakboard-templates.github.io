---
layout: article
title: dashboard for a departure schedule - Stuttgart
description: 
  - This template shows a departure plan of a public transport stop in Stuttgart. This way, passengers can see important information about the timetable, such as the arrival and departure of the next train/bus directly at the stop – in real time. The interface used here only works for Stuttgart.
lang: en
weight: 500
isDraft: true
ref: Stuttgart_Subway_Plan
category:
image: Abfahrtstafel-Haltestelle-Stuttgart.png
image_thumbnail: Abfahrtstafel-Haltestelle-Stuttgart_thumbnail.png
download: Abfahrtstafel-Haltestelle-Stuttgart.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# how it works
To adjust the board to a different subway station, please use this URL to find our the station number (Replace the search term Eugensplatz):
http://api.peakboard.io/VVS/GetStationsBySeachTerm?stationSearchRequest.searchTerm=Eugensplatz&stationSearchRequest.boxID=123

After you found your station number go to the JSON source in the board and replace the station number in the URL.

Based on the following API: https://codefor.de/projekte/2015-06-09-stgt-efa-meta-api.html