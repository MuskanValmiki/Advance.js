const prices = [432,34,22,12,56,787,699,800];
const new_vale = prices.filter((val,index)=>{
    console.log(index,"index")
    return val<400
});
console.log(new_vale)