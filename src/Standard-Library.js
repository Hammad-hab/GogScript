const { error } = require("./Message");
const { StringHelpers, ConditionalHelpers} = require("./Helpers");
const prompt = require("prompt-sync")();
const { MATH } = require("./Math.js");
const pl  = require("./parse-and-evaluate");
const { thisBooleanValue } = require("es-abstract/es2017");
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
const IF = (condition, thenkeyword, thendo, elsekeyword, orelse) => {
  if (condition) {
    var then = thendo.trim().split(".")
     for (let i = 0; i <  then.length; i++) {
       var element = then[i];
       pl.eval(element)
     }
    } else if (orelse) {
       var then = orelse.trim().split(".")
       for (let i = 0; i <  then.length; i++) {
       var element = then[i];
       pl.eval(element)
     }
    } 
};

const func = (nm, on_execute) => {
  Enviorment[nm] = () => {
    var then = on_execute.trim().split(".")
    for (let i = 0; i <  then.length; i++) {
      var element = then[i];
      pl.eval(element)
    }
  }
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
  return prompt(txt);
}
const log = function (...txt) {
  var string = txt.join('');
  string = string.replaceAll("%f", ".")
  string = string.replaceAll("%s", ";")
  console.log(string);
};

const array = function (name, ...elements) {
  Enviorment[name] = [...elements]
}
var Enviorment = {
  // functions
  array,
  log,
  define,
  assign,
  Input,
  if: IF,
  function: func,
  toInt: num => Number(num),
  toStr: str => String(str),
  toBool: bool => Boolean(bool),
  ...StringHelpers,

  // inner Data
  VariableDataTypes: {},
  // Data types

  int: "number",
  str: "string",
  bool: "boolean",
  false: "false",
  true: "true",
  NULL: null,
  autoDect: "autoDetection",
  Array: "object",
  // prefixes

  as: "as",
  to: "to",
  and: "and",
  then: "then",
  else: "else",
  with: "with",
  ...MATH,
  ...ConditionalHelpers,
};

module.exports = {
  Enviorment,
};

