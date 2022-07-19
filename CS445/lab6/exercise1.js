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




// *******OR**********
   

// const isPrime = num => new Promise((resolve, reject) => {
//     setTimeout(function() {
//         for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//             if (num % i === 0) reject({ prime: false });
//         resolve({ prime: num > 1 });
//     }, 500);
// });

// console.log('start');
// isPrime(4)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
// console.log('end');




// function isPrime(num){
    
//     return new Promise ((resolve,reject) =>{
//         for (let i=2; i < num; i++){
//             if (num % i == 0){
//            setTimeout(reject, 500,{prime: false}) 
//         } else {
//             setTimeout(resolve, 500,{prime: true}) 
       
//         }
// }})   
// }