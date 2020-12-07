---
layout: article
title: your party jukebox with the Spotify API and Peakboard
description: 
  - Using the Spotify API and this template you can run the perfect party songs. Connect a Spotify account and load the visualization onto a Peakboard Box. With the help of a touch screen or a mouse you can now interactively tune for songs and so the perfect playlist is created step by step. Place this board with a touch screen directly on the dance floor and let the guests decide what's coming!
lang: en
weight: 1000
isDraft: true
ref: Spotify-API-Jukebox-DJ
category:
  - Misc
image: Spotify-API-Jukebox-DJ.png
image_thumbnail: Spotify-API-Jukebox-DJ_thumbnail.png
download: Spotify-API-Jukebox-DJ.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# how it works

Download the template and open it with the Peakboard Designer.
Now you first have to authenticate yourself to Spotify. You do this by opening a data source (1.) and renewing the token there. Click on the button 'Renew Token' (2.) to open all settings concerning OAuth authentication. 

![](img/update-spotify-datasource.png)

Now click on 'Request Token' in the dialog.

![](img/request-spotify-token.png)

Afterwards you have to login to your Spotify account.

[](img/login-to-spotify.png)

Now you are done and the template is connected to your Spotify.

Now open Spotify on your computer or phone and run any song. The music is not transmitted via Peakboard, Peakboard only works as a kind of remote control.

If you start the visualization now in the preview or on a peakboard box you can start directly with a touchscreen or a mouse.

![](img/select-spotify-playlist.png)

Now select a playlist you want to use as a base for your jukebox. Afterwards, 4 songs from this playlist are always displayed randomly and transferred to the right column after a time period.

![](img/jukebox-active.png)

And this is how your jukebox works. There are always 4 random songs. And the guests of your party can vote for the songs (1). At the end of the voting time, which you can adjust (2) or when you press 'Done' (3), the song with the most votes is transferred to the 'Next Up' column (4). If there are no votes or if there is a tie the first song is always transferred. These are the songs that are now running one by one. Shortly before the end of a song the top song of this list is always transferred to your Spotify Queue. If you don't like any of the songs you can load four new songs (5) or even change the playlist (6). You can also skip the current song (7). So nothing stands in the way of an interactive party playlist.