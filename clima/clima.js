const axios = require('axios');

const getClima = async(location, lng) => {

        let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location}&lon=${lng}&units=metric&appid=25f3432ec0ff0a933d929dc17afcc98e`);
        let data = resp.data.main;
        return {
            temp: data.temp,
            presion: data.pressure,
            humedad: data.humidity,
            temp_min: data.temp_min,
            temp_max: data.temp_max
        }
    }
    /*
    {
        "coord": {
            "lon": -100.39,
            "lat": 20.59
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 19,
            "pressure": 1024,
            "humidity": 68,
            "temp_min": 19,
            "temp_max": 19
        },
        "visibility": 16093,
        "wind": {
            "speed": 5.1,
            "deg": 40
        },
        "clouds": {
            "all": 75
        },
        "dt": 1539812520,
        "sys": {
            "type": 1,
            "id": 4012,
            "message": 0.0037,
            "country": "MX",
            "sunrise": 1539779868,
            "sunset": 1539821714
        },
        "id": 3991164,
        "name": "Santiago de Queretaro",
        "cod": 200
    }*/
module.exports = {
    getClima
}