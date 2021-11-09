const prices =[700,345,678,908,34,2324,5667,897,7000]
var get_Elem = prices.find((elem)=>{
    return elem>400
});
console.log(get_Elem)

var get_Elem = prices.find((elem)=> elem>400);
console.log(get_Elem)

console.log(prices.find((elem)=> elem<400))


console.log(prices.find((elem)=> elem==400))