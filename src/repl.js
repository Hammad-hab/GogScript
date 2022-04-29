const  prompt = require("prompt-sync")();
const chalk = require("chalk");

const { parseAndEvaluate } = require("./parse-and-evaluate");
const { info } = require("./Message");
const { exit } = require("yargs");
const { editor } = require("./ReadFile");

const askQuestions = () => {
  return prompt(chalk.blue('>>>>> '));
};


const repl = async () => {

  try {
    const answers = askQuestions();
   
    if (answers === "exit") {
      exit()
    } 
    else if (answers === "help") {
      console.log(`
       ${chalk.blue('exit')}: Exits the terminal
       ${chalk.blue('help')}: Shows this text
       ${chalk.blue('cls')} : Clears the screen
       ${chalk.blue('readfile')}: enters the file reader
    `)
    }
    else if (answers === "cls") console.clear();
    else if (answers === "readfile") {editor();}
    else {
    if (answers.trim()) {
      parseAndEvaluate(answers);
    }
  }
  } catch (error) {
    console.log(chalk.redBright(error));
  }
  repl();

};
repl();
  setTimeout(() => {
    console.clear()
     info('START')
    }, 100)

module.exports = repl;
