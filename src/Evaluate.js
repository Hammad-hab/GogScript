const { default: chalk } = require('chalk')
const { error } = require('./Message')
const {Enviorment} = require('./Standard-Library')
const getIdentifier = (node) => {
  if (Enviorment[node.name] && node.type === "Identifier" || Enviorment.DataTypes[node.name] && node.type === "Identifier")  {
      return Enviorment[node.name]
  }
  else {
  throw new ReferenceError(chalk.redBright(`Unidentified identifer/DataType ${node.name}`))
  }
}
const getFunc = (node) => {
   const fn = Enviorment[node.name]
   const args = node.arguments.map(Evaluate)
 
   if (typeof fn != "function") {
       error(`${node.name} is not a function`)
   }
   else {
       return fn(...args)
   }
}


const Evaluate = (node) => {
    if (node.type === "Call_Expression") return getFunc(node);
    if (node.type === "Identifier") return getIdentifier(node);
    if (node.value) return node.value
}

module.exports = {
    Evaluate, 
}