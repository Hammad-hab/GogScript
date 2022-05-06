const { Evaluate } = require('./Evaluate')
const { parse } = require('./Parse')
const { tokenize } = require('./Tokens')
const {pipe} = require('./utilities')


var parseAndEvaluate = pipe(
  tokenize,
  parse,
  Evaluate
)



module.exports.eval = function (value) {parseAndEvaluate(value)}
  