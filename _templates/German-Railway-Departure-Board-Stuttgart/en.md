---
layout: article
title: Deutsche Bahn (German Railway) Departure Board for Stuttgart Main Station
description: 
  - This template shows a departure map of the Deutsche Bahn for Stuttgart main station. It includes departure times, delays, train type, route, destination and platform.
lang: en
weight: 500
isDraft: false
ref: German_Railway_Plan
category:
  - Traffic
  - Misc
image: German_Railway_Plan_EN.png
thumbnail: German_Railway_Plan_EN_thumbnail.png
download: German_Railway_Plan_EN.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# Remarks
To adjust the board to a different station, please adjust the EVA number in the URL of the JSon source (8000096 stands for Stuttgart).
If you don't know the eva number of your station, you can use this query to submit your station name and the eva number is returned:

https://open-api.bahn.de/bin/rest.exe/location.name?authKey=DBhackFrankfurt0316&lang=de&input=Stuttgart+hbf&format=json

Please make sure to get your own API key and register and the developer portal of Deutsche Bahn:

https://developer.deutschebahn.com/store/
