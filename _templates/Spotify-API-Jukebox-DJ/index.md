---
layout: article
title: deine digitale jukebox – interaktives dashboard mit Spotify integration
description: 
  - Mit Peakboard und Spotify gestaltest du deine digitale Jukebox in Form eines interaktiven Dashboards! Mithilfe der Spotify-API und diesem Template wird deine Party blitzschnell zum Kracher.  Verbinde einfach einen Spotify Account und lade die Visualisierung auf eine Peakboard Box. Mithilfe eines Touchscreens oder einer Maus können deine Gäste nun interaktiv für Songs abstimmen. Platziere den Touchscreen, auf dem das Dashboard ist direkt auf der Tanzfläche und lass die selbst Gäste entscheiden welcher Song als nächstes gespielt wird ― so entsteht nach und nach die perfekte Playlist.
lang: de
weight: 1000
isDraft: true
ref: Spotify-API-Jukebox-DJ
category:
  - Sonstiges
image: Spotify-API-Jukebox-DJ.png
image_thumbnail: Spotify-API-Jukebox-DJ_thumbnail.png
download: Spotify-API-Jukebox-DJ.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# so funktioniert's

Lade dir das Template herunter und öffne es mit dem Peakboard Designer. Nun musst du zuerst dich gegenüber Spotify authentifizieren. Dies machst du indem du eine Datenquelle öffnest (1.) und dort den Token erneuerst. Klicke auf den Button 'Token Erneuern' (2.) um alle Einstellungen bezüglich der OAuth Authentifzierung zu öffnen. 

![](img/update-spotify-datasource.png)

Klicke nun im Dialog auf 'Token Anfordern'.

![](img/request-spotify-token.png)

Anschließend musst du dich mit deinem Spotify Account anmelden.

![](img/login-to-spotify.png)

Nun bist du auch schon fertig und das Template ist mit deinem Spotify Account verbunden.

Öffne nun Spotify auf deinem Rechner oder Smartphone und lasse irgendwas laufen. Die Musik wird nicht über Peakboard übertragen, Peakboard funktioniert lediglich als eine Art Fernbedienung. Achtung: Dieses Template verwendet die Spotify Queue. Diese sollte daher leer bleiben solange du das Template verwendest.

Wenn du jetzt in der Preview oder auf einer Peakboard Box die Visualisierung startest kannst du mit einem Touchscreen oder eine Maus direkt loslegen.

![](img/select-spotify-playlist.png)

Wähle nun eine Playlist aus, die du als Basis für deine Jukebox verwenden möchtest. Anschließend werden immer zufällig 4 Songs aus dieser Playlist angezeigt und nach einer Zeitspanne in die rechte Spalte übertragen. 

![](img/jukebox-active.png)

Und so funktioniert deine Jukebox. Es erscheinen immer 4 zufällige Songs. Und die Gäste deiner Party können für die Songs abstimmen (1). Nach Ablauf der Abstimmungszeit, welche du anpassen kannst (2) oder wenn du auf 'Done' (3) drückst wird der Song mit den meisten Votes in die 'Next Up' Spalte (4) übertragen. Gibt es keine Stimmen oder herrscht Gleichstand wird immer der erste Song übertragen. Das sind die Songs die nun nach und nach ablaufen. Kurz vor Ende eines Lieds wird immer das oberste Lied dieser Liste in deine Spotify Queue übertragen. Gefällt keiner der Songs kannst du auch vier neue Songs laden (5) oder gar die Playlist wechseln (6). Auch das aktuelle Lied überspringen ist möglich (7). Damit steht einer interaktiven Partyplaylist nichts mehr im Wege.
