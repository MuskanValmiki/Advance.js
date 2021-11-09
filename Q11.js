async function hello() {
    return 'Hello Alligator!';
  }
const b = hello();
console.log(b); 
// return promises
async function hello() {
    return 'Hello Mussu!';
  }
const c = hello();
b.then(x => console.log(x));
// here we use .then methods

async function hello() {
    return 'Hello Muskan!';
  }
hello().then(x => console.log(x));
