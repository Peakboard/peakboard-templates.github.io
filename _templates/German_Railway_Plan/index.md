---
layout: article
title: Zug Abfahrtstafel – Deutsche Bahn
description: 
  - Dieses Template zeigt einen Abfahrtsplan der Deutschen Bahn inkl. Zugtyp, Verspätung, Route etc. Es wird der Stuttgart Hauptbahnhof als Basis verwendet.
lang: de
weight: 500
isDraft: false
ref: German_Railway_Plan
category:
  - Mobilität
  - Zug
  - Bahn
  - ÖPNV
  - Abfahrtsplan
image: German_Railway_Plan_EN.png
download: German_Railway_Plan_EN.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# Remarks
To adjust the board to a different station, please adjust the EVA number in the URL of the JSon source (8000096 stands for Stuttgart).
If you don't know the eva number of your station, you can use this query to submit your station name and the eva number is returned:

https://open-api.bahn.de/bin/rest.exe/location.name?authKey=DBhackFrankfurt0316&lang=de&input=Stuttgart+hbf&format=json

Holen Sie sich Ihren eigenen API Schlüssel auf dem Entwickler Portal der Deutschen Bahn:
https://developer.deutschebahn.com/store/
