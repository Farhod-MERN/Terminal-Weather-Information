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
  
  `);
};
export { printError, printSuccess, printHelp };
