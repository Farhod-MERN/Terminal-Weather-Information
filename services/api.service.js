import https from "https"
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
    // console.log(response.data);
    return response.data
}

export {getWeather}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//  ae22f571d12c63bcd0e043bcde2445b4

 // const url = new URL('https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=ae22f571d12c63bcd0e043bcde2445b4')
    // // url.searchParams.append('q', city)
    // // url.searchParams.append('appid', token)
    // // url.searchParams.append('lang', 'en')
    // // url.searchParams.append('units', 'metric')

    // https.get(url, (response)=>{
    //     let res = ''
    //     response.on("data", (chunk) =>{
    //         res += chunk
    //     })
    //     response.on("end", ()=>{
    //         console.log(res);
    //     })
    // })



   