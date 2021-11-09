function yayOrNay() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
      val ? resolve('Lucky!!') : reject('Nope 😠');
    });
  }
  async function msg() {
    try {
      const msg = await yayOrNay();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
  }  
msg(); 
msg(); 
msg(); 
msg(); 
// here we are handling error also.

function caserUpper(val) {
    return new Promise((resolve, reject) => {
      resolve(val.toUpperCase());
    });
  }
  async function msg(x) {
    try {
      const msg = await caserUpper(x);
      console.log(msg);
    } catch(err) {
      console.log('Ohh no:', err.message);
    }
  }
msg('Hello'); // HELLO
msg(34); // Ohh no: val.toUpperCase is not a function
// here by using try or catch we handel the error.
