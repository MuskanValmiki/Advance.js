const fs = require('fs')
fs.writeFileSync('demo.txt',"Hey Its Just a Demo")
// syncronous file system

fs.writeFile("file.txt","Hey I am playing",(err)=>{
    if (err) throw err
    console.log("Writing complete")
});
// asyncchronous file system
