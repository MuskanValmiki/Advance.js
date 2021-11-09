function* someGenerator(){
  yield 'Cats';
  yield 'Dogs';
  yield 'Birds';
}
// console.log(someGenerator);
const gen = someGenerator();
console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
// by using * character after that function keyword to indicate that it is a generator function.by calling next() on the generator and getting value.

const gen2 = someGenerator();

console.log(gen2.next().done); 
console.log(gen2.next().done); 
console.log(gen2.next().done); 
console.log(gen2.next().done); 
// next() returns an object with the value and a boolean called done that returns true if the generator is out of values.
