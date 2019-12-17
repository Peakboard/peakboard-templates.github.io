---
layout: article
title: Status Overview of a Tesla Car
description: 
  - This visualization obtains and visualizes information directly from a Tesla. Please note that you need a Tesla with the corresponding access data in order to use this template.
lang: en
weight: 500
isDraft: true
ref: Car_Status_Tesla
category:
  - Automobile
  - Mics
image: Car_Status_Tesla_DE.png
image_thumbnail: Car_Status_Tesla_DE_thumbnail.png
download: Car_Status_Tesla_EN.pbmx
overview_description:
overview_benefits:
overview_data_sources:
---
## Remarks

> Please note that this approach uses the same api as the tesla mobile app. This is not an official api.

### Request token

In order to get this board running you need to request an api key via the Tesla api. 
Just send a POST request with the following json body to `https://owner-api.teslamotors.com/oauth/token`:

```json
{
  "grant_type": "password",
  "client_id": "81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384",
  "client_secret": "c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3",
  "email": "<your email address for tesla.com>",
  "password": "<your password for tesla.com>"
}
```

The response will look like this:
```json
{
    "access_token": "<your access token>",
    "token_type": "bearer",
    "expires_in": 3888000,
    "refresh_token": "<your refresh token>",
    "created_at": 1564730977
}
```

Since the retrieved access token is only valid for 45 days, you can use the request_token to request a new token. You can do this by sending a POST request with the following json body to `https://owner-api.teslamotors.com/oauth/token`:

The request will look like this:
```json
{
  "grant_type": "refresh_token",
  "client_id": "81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384",
  "client_secret": "c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3",
  "refresh_token": "<your refresh_token>"
}
```

### Find your vehicle_id

Now you need to find out about the id of your Tesla (you have to use `id` instead of `vehicleId`) by requesting a list of vehicles from `https://owner-api.teslamotors.com/api/1/vehicles`. To access this endpoint you are required to add the header `Authorization: Bearer <your acces_token here>` to your request. The response will look like this:

```json
{
    "response": [
        {
            "id": <your id>,
            "vehicle_id": <your vehicle_id>,
            "vin": "<your vin>",
            "display_name": "Friedhelm",
            "option_codes": "AD15,MDL3,PBSB,RENA,...",
            "color": null,
            "tokens": ["<your tokens>"],
            "state": "offline",
            "in_service": false,
            "id_s": "<your id>",
            "calendar_enabled": true,
            "api_version": 6,
            "backseat_token": null,
            "backseat_token_updated_at": null
        }
    ],
    "count": 1
}
```

### Get vehicle status
Now you can jump into the Peakboard designer. There you have to set the two variables `token` and `vehicleId` to the token and id you received in the previous calls (use your id not vehicle_id for vehicleId).

Sometimes it may take up to 20 seconds to finish this request. The reason for that is that the Tesla falls asleep when inactive for a few minutes and needs some time to wake up again.