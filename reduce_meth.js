const number = [1,2,3,45,6];
let sum = number.reduce((acc,val)=>{
   
    return acc+val
},7);
console.log(sum);

let pro = number.reduce((acc,val)=>{
    return acc*val
});
console.log(pro);