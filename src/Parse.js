const {
  isOpeningParenthesis,
  isClosingParenthesis,
} = require("./Helpers");
const { pop, peek } = require("./utilities");

const ParathenisisParse = (tokens) => {
  const token = pop(tokens);

  if (isOpeningParenthesis(token.value)) {
    const Expression = [];

    while (!isClosingParenthesis(peek(tokens).value)) {
      Expression.push(ParathenisisParse(tokens));
    }

    pop(tokens);
    return Expression;
  }
 
  return token;
};
const parse = (tokens) => {
  const token = tokens;
  if (Array.isArray(tokens)) {
    const [name, ...args] = tokens;
    return {
      type: "Call_Expression",
      name: name.value,
      arguments: args.map(parse),
    };
  }

  if (token.type === "Number") {
    return {
      type: "Numeric_Literal",
      value: token.value,
    };
  }

  if (token.type === "String") {
    return {
      type: "String_Literial",
      value: token.value,
    };
  }

  if (token.type === "Name") {
    return {
      type: "Identifier",
      name: token.value,
    };
  }
  if (token.type === "Operator") {
    return {
      type: "VariableName",
      name: token.value,
    };
  }

  pop(tokens);
};
module.exports = {
  parse: (tokens) => parse(ParathenisisParse(tokens)),
};
