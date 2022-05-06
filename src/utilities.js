const pipe = (...funcs) => value => funcs.reduce((value, func) => func(value), value);
const peek = array => array[0];
const pop = array => array.shift();
module.exports = {
    pipe,
    peek, 
    pop
}
