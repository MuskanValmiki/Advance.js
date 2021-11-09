function TimeConvert(num) { 

    let hours = 0;
    let minutes = 0;
    minutes = num % 60;
    hours = (num - minutes) / 60;
    return hours + ':' + minutes; 
           
  }
     
  // keep this function call here 
console.log(TimeConvert(63));