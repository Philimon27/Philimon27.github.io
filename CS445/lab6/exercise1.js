"use strict"
function isPrime(num){
      return new Promise(function(resolve,reject){

       let obj={prime:true};
        for(let i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0) {
            obj.prime=false;
            return setTimeout(()=>reject(obj),500)
        }
    return setTimeout(()=>resolve(obj));
}
}
   
)
}
console.log('start');
isPrime(7)
.then(res => console.log(res))
.catch(err => console.error(err));
console.log('end');