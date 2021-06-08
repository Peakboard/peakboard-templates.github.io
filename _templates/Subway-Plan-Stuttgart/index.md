---
layout: article
title: dashboard für einen abfahrtsplan ― Stuttgart
description: 
  - Dieses Template zeigt einen Abfahrtsplan einer Haltestelle in Stuttgart. So haben Fahrgäste wichtige Informationen zum Fahrplan wie z. B. Ankunft- und Abfahrt der nächsten Bahn / des nächsten Busses direkt an der Haltestelle im Blick - und zwar in Echtzeit. Die Schnittstelle die hier verwendet wird funktioniert nur für Stuttgart.
lang: de
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
# so funktioniert's
Um dieses Board für eine andere Haltestelle zu verwenden, kann die nötige ID über folgenden [Link](http://api.peakboard.io/VVS/GetStationsBySeachTerm?stationSearchRequest.searchTerm=Eugensplatz&stationSearchRequest.boxID=123) herausgefunden werden. Die Haltestelle Eugensplatz muss ersetzt werden.

Nachdem du die richtige Stationsnummer gefunden hast, kannst du diese in der URL ersetzen.

Board basiert auf dieser API: [https://codefor.de/projekte/2015-06-09-stgt-efa-meta-api.html](https://codefor.de/projekte/2015-06-09-stgt-efa-meta-api.html)