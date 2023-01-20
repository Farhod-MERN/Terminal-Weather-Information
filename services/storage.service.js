import os from "os"
import path from "path"
import fs from "fs"

const TOKEN_DICTIONARY = {
    token : "token",
    city : "city"
}

const filePath = path.join(os.homedir(), 'weather-data.json')
//               C:\Users\hp i7\weather-data.json
const saveKeyValue = async (key , value)=>{
    let data = {}

    if(await isExist(filePath)){
        const file = await fs.promises.readFile(filePath)
        data = JSON.parse(file)
    }

    data[key] = value
    await fs.promises.writeFile(filePath, JSON.stringify(data)) // promises bizga ketma ket ishlashga yordam beradi
}

const getKeyValue = async (key)=>{
    if( await isExist(filePath)){
        const file = await fs.promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }
}

const isExist = async (path) =>{
    try{
        await fs.promises.stat(path)
        return true
    }
    catch(error){
        return false
    }
}

export {saveKeyValue, getKeyValue , TOKEN_DICTIONARY}