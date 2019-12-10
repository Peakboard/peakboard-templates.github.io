---
layout: article
title: Abfahrtstafel der Deutschen Bahn für den Stuttgarter Hauptbahnhof
description: 
  - Dieses Template zeigt einen Abfahrtsplan der Deutschen Bahn für den Stuttgarter Hauptbahnhof. Es beinhaltet Abfahrtszeiten, Verspätungen, Zugtyp, sowie Route, Zielort und Gleis.
lang: de
weight: 500
isDraft: true
ref: German-Railway-Departure-Board-Stuttgart
category:
  - Verkehr
  - Sonstiges
image: German-Railway-Departure-Board-Stuttgart.png
image_thumbnail: German-Railway-Departure-Board-Stuttgart_thumbnail.png
download: German-Railway-Departure-Board-Stuttgart.pbmx
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
