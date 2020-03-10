---
layout: article
title: Abfahrtsplan Station Stuttgart
description: 
  - Dieses Template zeigt einen Abfahrtsplan einer Haltestelle in Stuttgart. Die Schnittstelle die verwendet wird funktioniert nur für Stuttgart.
lang: de
weight: 500
isDraft: false
ref: Stuttgart_Subway_Plan
category:
image: Abfahrtstafel-Haltestelle-Stuttgart.png
image_thumbnail: Abfahrtstafel-Haltestelle-Stuttgart_thumbnail.png
download: Abfahrtstafel-Haltestelle-Stuttgart.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# Remarks
To adjust the board to a different subway station, please use this URL to find our the station number (Replace the search term Eugensplatz):
http://api.peakboard.io/VVS/GetStationsBySeachTerm?stationSearchRequest.searchTerm=Eugensplatz&stationSearchRequest.boxID=123

After you found your station number go to the JSON source in the board and replace the station number in the URL.

Based on the following API: https://codefor.de/projekte/2015-06-09-stgt-efa-meta-api.html