---
layout: article
title: Subway Plan Stuttgart
description: 
  - This board shows a departure board for the subway / Metro in Stuttgart (Germany). The API used in the board is only suitable for the Stuttgart subway.
lang: en
weight: 500
isDraft: true
ref: Stuttgart_Subway_Plan
category:
image: Stuttgart_Subway_Plan_DE.png
download: Stuttgart_Subway_Plan_DE.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# Remarks
To adjust the board to a different subway station, please use this URL to find our the station number (Replace the search term Eugensplatz):
http://api.peakboard.io/VVS/GetStationsBySeachTerm?stationSearchRequest.searchTerm=Eugensplatz&stationSearchRequest.boxID=123

After you found your station number go to the JSON source in the board and replace the station number in the URL.

Based on the following API: https://codefor.de/projekte/2015-06-09-stgt-efa-meta-api.html