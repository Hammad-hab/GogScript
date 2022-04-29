// String Helpers

const colors = require("colors/safe");


const innerStringHelpers = {
nl : "\n",
rd : colors.red,
bl : colors.blue,
gr : colors.green,
gry: colors.gray,
rnbw : colors.rainbow,
bld  : colors.bold,
itc  : colors.italic,
}
// Conditional Helpers

// Tokenization Helpers
const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%', '$', ";"];

const isLetter = character => LETTER.test(character);

const isWhitespace = character => WHITESPACE.test(character);

const isNumber = character => NUMBER.test(character);

const isOpeningParenthesis = character => character === '(';

const isClosingParenthesis = character => character === ')';

const isParenthesis = character =>
  isOpeningParenthesis(character) || isClosingParenthesis(character);

const isQuote = character => character === '"' || character === "'" || character === "`";

const isOperator = character => OPERATORS.includes(character);

const isComment = character => character === "@"
module.exports = {
  isLetter,
  isWhitespace,
  isNumber,
  isOpeningParenthesis,
  isClosingParenthesis,
  isParenthesis,
  isQuote,
  isOperator,
  isComment,

StringHelpers: { 
 ...innerStringHelpers
}
  // tStr,
};
