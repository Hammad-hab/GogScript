const { error } = require("./Message");
const { StringHelpers } = require("./Helpers");
const prompt = require("prompt-sync")();
const{ MATH }= require('./Math.js')
const { isWhitespace } = require("./Helpers")

const  { parseAndEvaluate } = require("./parse-and-evaluate")
// Variable Func
const func = (name, args) => {
  var params = args
  Enviorment[name] = function () {
    if (params[0] === "(") {
      var i = 1
      var name = ""
      var param = ""
      while (!isWhitespace(params[i])) {
         name += params[i]
         i++
      }
      while(!isWhitespace(params[i])) {
        param += params[i]
        i++
      }

   console.log(param + " " + name)
    }
   }
  }

function define(nm, as, dt, value) {
  if (as != Enviorment["as"]) {
    error(`Unexpected prefix ${as}. The prefix that is to be used it "as"`);
  }
  if (
    typeof value === dt ||
    value === Enviorment["False"] ||
    value === Enviorment["True"] ||
    typeof value === "undefined"
  ) {
    if (!value) {
      Enviorment[nm] = "undefined";
      Enviorment.VariableDataTypes[nm] = { dataType: dt };
    } else {
      Enviorment[nm] = value;
      Enviorment.VariableDataTypes[nm] = { dataType: dt };
    }
  } else {
    error(
      `${nm} is of type ${dt} but the given value is of type ${typeof value}`
    );
  }
  return Enviorment[nm];
}

function assign(value, to, nm) {
  if (typeof value === Enviorment.VariableDataTypes[nm].dataType) {
    Enviorment[nm] = value;
  } else {
    error(
      `The given value is of type ${typeof value}, it must be of type ${
        Enviorment.VariableDataTypes[nm].dataType
      }`
    );
  }
  return Enviorment[nm];
}


// Basic Func
function Input(txt) {
  return prompt(txt + ": ");
}
const log = function (...txt) {
  var string = txt.join("");
  console.log(string);
};



var Enviorment = {
  // functions
  func,
  log,
  define,
  assign,
  Input,
  parseAndEvaluate,
  
  ...StringHelpers,

  // inner Data
  VariableDataTypes: {},
  // Data types

  int: "number",
  str: "string",
  bool: "boolean",
  False: "false",
  True: "true",
  NULL: null,
  autoDect: "autoDetection",
  // prefixes

  as: "as",
  to: "to",
  and: "and",

  ...MATH
};

module.exports = {
  Enviorment,
};
