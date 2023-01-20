import axios from "axios"
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js"

const getWeather = async (city) =>{

    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
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

export {getWeather}
