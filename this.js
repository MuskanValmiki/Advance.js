console.log(this);

"use strict"
const fun={
    name:"muskan",
    qualif:"twelve",
    sum: function(){
        add=2+2;
        console.log("sum of two no is :"+add);
        console.log(this.name)
        console.log(this);
    }
}
fun.sum();
// strict mode will show silent error

const thapa={
    name:"Muskan",
    qualif:"Graduated",
    sum: function(){
        var add=2+2;
        console.log("sum of two no is :"+add);
        console.log(this);
        console.log(this.qualif)
    }
}
thapa.sum();

// sum of two no is :4
// { name: 'muskan', qualif: 'twelve', sum: [Function: sum] }