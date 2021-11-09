const square={
    area:(a)=>(a*a),
    parameter:(a)=>(4*a)
}

const calSquare=(a)=>{
    console.log(`the value is ${a} and the parameter`+square.parameter(a))
    console.log(`the value is ${a} and the area`+square.area(a))
}
calSquare(5)
//find the area and parameter in node js

