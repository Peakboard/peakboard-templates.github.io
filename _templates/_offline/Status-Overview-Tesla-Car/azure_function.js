const axios = require('axios');

const retrieveVehicleStatus = async (client, vehicleId) => {
    const result = await client.get(`/vehicles/${vehicleId}/vehicle_data`);
    if (!result && !result.data && result.data.response === undefined) {
        throw new Error("Couldn't parse vehicle data response");
    }

    const response = result.data.response;
    const cleanResult = {
        vehicleId: response.id_s,
        displayName: response.display_name,
        carType: response.vehicle_config.car_type,
        locked: response.vehicle_state.locked,
        odometer: response.vehicle_state.odometer,
        batteryLevel: response.charge_state.battery_level,
        batteryRange: response.charge_state.battery_range,
        chargeRate: response.charge_state.charge_rate,
        timeToFullCharge: response.charge_state.time_to_full_charge,
        insideTemp: response.climate_state.inside_temp,
        latitude: response.drive_state.latitude,
        longitude: response.drive_state.longitude,
        speed: response.drive_state.speed,
        gui24HourTime: response.gui_settings.gui_24_hour_time,
        guiChargeRateUnits: response.gui_settings.gui_charge_rate_units,
        guiDistanceUnits: response.gui_settings.gui_distance_units,
        guiRangeDisplay: response.gui_settings.gui_range_display,
        guiTemperatureUnits: response.gui_settings.gui_temperature_units,
    };

    return cleanResult;
};

const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

module.exports = async function (context, req) {
    if (req.query && req.query.token && req.query.vehicleId) {

        const token = req.query.token;
        const vehicleId = req.query.vehicleId;

        const client = axios.create({
            baseURL: 'https://owner-api.teslamotors.com/api/1',
        });
        const AUTH_TOKEN = `Bearer ${token}`;
        client.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        client.defaults.headers.post['Content-Type'] = 'application/json';

        try {
            // Check 10 times if car is online and try to wake it, else throw error 
            for (let i = 0; i < 10; i += 1) {
                const wakeUpResult = await client.post(`/vehicles/${vehicleId}/wake_up`, {});
                if (!wakeUpResult && !wakeUpResult.data && wakeUpResult.data.response === undefined) {
                    throw new Error("Couldn't parse wakeup response");
                }
                if (wakeUpResult.data.response.state === "online") {
                    const vehicleStatusResult = await retrieveVehicleStatus(client, vehicleId);
                    context.res = {
                        status: 200,
                        body: vehicleStatusResult,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    };

                    return;
                }
                await delay(2000);
            }

            throw new Error("Couldn't wake up car.")
        } catch (e) {
            context.res = {
                status: 400,
                body: { success: false, errorMsg: e.message },
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: { success: false, errorMsg: 'Please pass the url parameters token and vehicleId' },
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }
};