function* idGen(){
    let i = 0;
    while (true) {
      yield ++i;
    }
  }
const myIdGen = idGen();
console.log(myIdGen.next().value); 
console.log(myIdGen.next().value); 
console.log(myIdGen.next().value); 
console.log(myIdGen.next().value); 
// by using ID Generator  we can use an infinite while in a generator function to create a function that will generate a newID every time naxt() is called on it.In this case the infinite loop is not dangerous because it will only execute once with calls to next().
