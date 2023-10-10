import chalk from "chalk";                            // ES6 import method, declare 'type': 'module' in package.json file 
// const chalk = require('chalk')                     // Common JS import method, declare nothing or declare 'type': 'commonjs'
import validator from "validator";

//1
{
    const ja = {
        name: 'jaiprakash',
        lname: 'nagar'
    }

    // const jaa = chalk.red('ja')
    console.log(`${chalk.red(`${ja}`)}`)                       // chalk module doesn't work on object {} and works only array, string, boolean.
    console.log(chalk.blue.inverse('hello chalk module'))      // 'chalk' is a package/module which is used for styling our terminal

    const name = 'john'
    console.log(chalk.white.inverse(name))

    const pa = JSON.stringify(ja)
    console.log(chalk.magenta(pa))
    console.log(chalk.bgYellow(typeof pa))

}

//2.
{
    const bool = true;
    console.log(chalk.bgGray(bool))

}

//3.
{
    const result = validator.isEmail('jaiprakash246@gmail.com')
    console.log(result ? chalk.bgGreen('success!', result) : chalk.bgRed('fail!', result))   // 'validator' module with 'chalk' module

}

//4.
{
    const arr = [1, 2, 3]
    console.log(chalk.yellow.inverse(arr), typeof arr)
    console.log(JSON.stringify(arr), typeof JSON.stringify(arr))

}