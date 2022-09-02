---
layout: article
title: your digital jukebox with spotify integration – interactive dashboard
description: 
  - Create an interactive dashboard with Spotify integration as a digital jukebox! Use this template and the Spotify API to turn your Spotify Account into a social jukebox.  Simply connect any Spotify account and transfer the visualization onto your Peakboard Box. Now use a touchscreen of your choice or a mouse, to let your guests or customers pick the next song. Create the perfect playlist for your party by placing this interactive and social party gag next to the dancefloor or right at the bar.
lang: en
weight: 1000
isDraft: true
ref: Spotify-API-Jukebox-DJ
category:
  - All
  - Misc
image: Spotify-API-Jukebox-DJ.png
image_thumbnail: Spotify-API-Jukebox-DJ_thumbnail.png
download: Spotify-API-Jukebox-DJ.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
# how it works

Download the template and open it with the Peakboard Designer. Now you first have to authenticate yourself to Spotify. You do this by opening a data source (1.) and renewing the token there. Click on the button 'Renew Token' (2.) to open all settings concerning OAuth authentication. 

![](img/update-spotify-datasource.png)

Now click on 'Request Token' in the dialog.

![](img/request-spotify-token.png)

Afterwards you have to login to your Spotify account.

![](img/login-to-spotify.png)

Now you are done and the template is connected to your Spotify.

Now open Spotify on your computer or phone and run any song. The music is not transmitted via Peakboard, Peakboard only works as a kind of remote control. Please note: This template uses the Spotify Queue. The queue should remain empty while you use the template.

If you start the visualization now in the preview or on a Peakboard Box you can start directly with a touchscreen or a mouse.

![](img/select-spotify-playlist.png)

Now select a playlist you want to use as a base for your jukebox. Afterwards, 4 songs from this playlist are always displayed randomly and transferred to the right column after a time period.

![](img/jukebox-active.png)

And this is how your jukebox works. There are always 4 random songs. And the guests of your party can vote for the songs (1). At the end of the voting time, which you can adjust (2) or when you press 'Done' (3), the song with the most votes is transferred to the 'Next Up' column (4). If there are no votes or if there is a tie the first song is always transferred. These are the songs that are now running one by one. Shortly before the end of a song the top song of this list is always transferred to your Spotify Queue. If you don't like any of the songs you can load four new songs (5) or even change the playlist (6). You can also skip the current song (7). So nothing stands in the way of an interactive party playlist.
