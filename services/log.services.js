import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("error") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("Success") + " " + message);
};
const printHelp = () => {
  console.log(dedent`
  ${chalk.bgBlue("HELP")}
  -s [CITY] to set city
  -h for any help
  -t [API_KEY] to save Token
  to search : CITY=London node index.js
  `);
};

const printWeather =(response, icon)=>{console.log(dedent`
  ${chalk.bgYellowBright("Weather information by Farhod")}
  City Name : ${response.name} Sys: ${response.sys.country}
  ${icon}  ${response.weather[0].description}
  Temperature: ${response.main.temp} (feels like: ${response.main.feels_like})
  Pressure: ${response.main.pressure}
  Humidity: ${response.main.humidity}%
  Wind Speed: ${response.wind.speed}
`);
}
export { printError, printSuccess, printHelp ,printWeather};
