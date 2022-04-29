const { default: chalk } = require("chalk")

const error = (txt) => {
   console.log(chalk.redBright(txt))
}  

const deprecated = (txt) => {
    console.log(chalk.blueBright(txt))
}

const info = (txt) => {
    console.log(chalk.blue(txt))
}

const warning = (txt) => {
    console.log(chalk.yellow(txt))
}
module.exports = { 
    error,
    deprecated,
    info,
    warning
}