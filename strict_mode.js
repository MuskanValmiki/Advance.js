"use strict"
function sum(){
    var res = 6+7
    console.log(`sum of two num is ${res}`);
    console.log(this)

}
sum();