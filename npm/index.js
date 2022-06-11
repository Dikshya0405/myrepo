const chalk = require("chalk");


console.log(chalk.blue.underline.inverse("Hello World"));
console.log(chalk.green.inverse("Success"));
console.log(chalk.red.inverse("Fail"));



const validator = require("validator");
const result = validator.isEmail('foo@bar.com');
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result)); // ? symbolizes it its true and : symbolises if its false

