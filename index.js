import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async ()=>{
  try{
    const response = await getWeather(process.env.CITY ?? "London")
    console.log(response);
  }catch(error){
    if(error?.response?.status == 404){
      printError("City not found !")
    }
    else if(error?.response?.status == 401){
      printError("Invalid Token !")
    }
    else{
      printError(error.message)
    }
  }
}

const startCLI = () => {
  const args = getArgs(process.argv);
  // console.log(process.argv);
  // console.log(process.env);

  // console.log(args);

  // help
  if (args.h) {
    printHelp();
  }

  // save
  if (args.s) {
    console.log("Save");
  }
  // sava token
  if (args.t) {
    return saveToken(args.t);
  }
  getForcast()
};
startCLI();

// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=96b947a45d33d7dc1c49af3203966408
// const KEY = '96b947a45d33d7dc1c49af3203966408'
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//  667faa295a4445729e3385ff583326ee