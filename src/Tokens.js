const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
  isOperator,
  isTempQuote
} = require("./Helpers");
const chalk = require("chalk");
function tokenize(input) {
  var cursor = 0;
  var tokens = [];
  while (cursor < input.length) {
    var Char = input[cursor];
    if (isWhitespace(Char)) {
      cursor++;
      continue;
    }
    if (isNumber(Char)) {
      var Integer = Char;
      while (isNumber(input[++cursor])) {
        Integer += input[cursor];
      }
      tokens.push({
        type: "Number",
        value: parseInt(Integer, 10),
      });
      continue;
    }
    if (isQuote(Char)) {
      var Expression = "";
      while (!isQuote(input[++cursor])) {
        Expression += input[cursor];
      }
      tokens.push({
        type: "String",
        value: Expression,
      });
      cursor++;
      continue;
    } 
     
    if (isTempQuote(Char)) {
      var Expression = ""
      while (!isTempQuote(input[++cursor])) {
        Expression += input[cursor];
      }
      tokens.push({
        type: "Code",
        value: Expression,
      });
      cursor++;
      continue;
    }
    if (isParenthesis(Char)) {
      tokens.push({
        type: "Parathenisis",
        value: Char,
      });
      cursor++;
      continue;
    }
 
    if (isLetter(Char)) {
      var Name = Char;
      while (isLetter(input[++cursor])) {
        Name += input[cursor];
      }
      tokens.push({
        type: "Name",
        value: Name,
      });
      //    cursor++
      continue;
    }

    if (isOperator(Char)) {
      tokens.push({
        type: "Operator",
        value: Char,
      });
      cursor++;
      continue;
    }

    throw new Error(chalk.redBright(`Unidentified token ${Char}`));
  }
  
  
  return tokens;
}

module.exports = {
  tokenize,
};
