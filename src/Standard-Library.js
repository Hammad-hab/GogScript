const { error } = require("./Message");
const { StringHelpers } = require("./Helpers");
const prompt = require("prompt-sync")();
const { MATH } = require("./Math.js");
const pl  = require("./parse-and-evaluate");
// Variable Func



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
const IF = (condition, then, thenDo, elset, orelse) => {
  if (condition) {
    pl.eval(then)
  } else {
    console.log("no");
  }
};
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
  log,
  define,
  assign,
  Input,
  IF,

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
  then: "then",
  else: "else",

  ...MATH,
};

module.exports = {
  Enviorment,
};
