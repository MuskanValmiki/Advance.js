const array = ["megha","kashyap","yup"];
let ar = array.map((val,i,arr)=>{
    console.log(arr)
    console.log(val+"----"+i)
})


const data =[
    {id:1,name:"megha",age:20},
    {id:2,name:"Ruhi",age:4},
    {id:3,name:"somya",age:5}
]

const new_data = data.map((value,ind)=>{
    return `My name is ${value.name}. My age is ${value.age}`
});
console.log(new_data);