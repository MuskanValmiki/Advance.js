let i = 0 // declare a mutable variable
i += 1 // add one to the variable
console.log(i) // log the variable

setTimeout(() => console.log(j), 0)
let j = 0 
j += 1

var a = {a: 1};
var b = {a: 1};
console.log(a == b) //false
console.log(a === b)//false

var c = a;
console.log(a == c)//true
console.log(a === c)//true
          