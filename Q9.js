function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 2000);
    });
  }
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
msg();
// Message: 🤡 <-- after 2 seconds,await is a new operator used to wait for a promise to resolve or reject.it can only be used inside an async function.

