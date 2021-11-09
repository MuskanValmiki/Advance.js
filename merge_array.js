var array =[1,2,3];
var arr = [...array];
console.log(arr);   
// copy the element


var list = [3,4,56,6];
var list2 = [...list,"a","b"];
console.log(list2);
// expamding the array

console.log([array,...list2,list])