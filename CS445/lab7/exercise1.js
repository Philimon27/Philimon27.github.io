"use strict"
  
     async function isPrimeAsync(num){
         try {
            let promise = new Promise((resolve,reject)=>{
                setTimeout(function() {
                    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
                        if (num % i === 0) reject ({ prime: false });
                    resolve ({ prime: num > 1 });
                }, 500);
            });
    
            let output= await promise;
            console.log(output)
         } catch (error) {
             console.log(error);
         }
        
            
     }
     
     
     
// console.log('start');
// isPrimeAsync(7)
// console.log('end');



//**********OR*************
// const isPrime = num => new Promise((resolve, reject) => {
//     setTimeout(function() {
//         for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//             if (num % i === 0) reject({ prime: false });
//         resolve({ prime: num > 1 });
//     }, 500);
// });

//  async  function isPrimeAsync(num){
//      try {
//          let output=await isPrime(num)
//          console.log(output);
//      } catch (error) {
//          console.log(error);
//      }
//  }
 console.log('start');
isPrimeAsync(4)
console.log('end');