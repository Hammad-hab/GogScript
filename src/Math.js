
const MATH = { 
   add: (n1, withkeyword, n2)  => {return n1 + n2},
   subtract: (n1,withkeyword, n2) => {return n1 - n2},
   multiply: (n1, withkeyword, n2) => {return n1 * n2},
   divide: (n1, withkeyword, n2) => {return n1 / n2},
   Pythogrean: (x1, x2, y1, y2) => {
    const dist1 = x1 - x2;
    const dist2 = y1 - y2;
    return Math.sqrt(Math.pow(dist1, 2) + Math.pow(dist2, 2));
   },
   pi: Math.PI,
   e: Math.E,
   Infinite: Infinity,
   random : (number) => {
    return Math.floor(Math.random() * number)
 }
}


module.exports = {
    MATH
}