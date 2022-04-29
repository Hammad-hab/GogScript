const { Evaluate } = require('./Evaluate')
const { parse } = require('./Parse')
const { tokenize } = require('./Tokens')
const {pipe} = require('./utilities')


const parseAndEvaluate = pipe(
   tokenize,
   parse,
   Evaluate
);

module.exports = {
    parseAndEvaluate
}