import axios from "axios"
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js"

const getIcon = icon => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️'
		case '02':
			return '🌤️'
		case '03':
			return '🌥️'
		case '04':
			return '☁️'
		case '09':
			return '🌧️'
		case '10':
			return '🌦️'
		case '11':
			return '⛈️'
		case '13':
			return '❄️'
		case '50':
			return '🌫️'
	}
}


const getWeather = async (city) =>{

    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token) ?? "ae22f571d12c63bcd0e043bcde2445b4"
    if(!token){
        throw new Error("Api doesn't exist,  -t [API_KEY] for saving Token")
    }

    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: "metric"
        }
    })
    return response.data
}

export {getWeather, getIcon}
