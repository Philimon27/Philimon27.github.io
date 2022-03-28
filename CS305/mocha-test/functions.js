
"use strict";
//module.exports = {checkPrime, ssReverse };
/**
* @param {number} num is an integer
* @returns {boolean} true if number is prime, else false * Prime numbers have only 2 factors: 1 and themselves.
*/
function checkPrime(num) {
for (let i = 2; i < num; i++)
if (num % i === 0) return false;
return num > 1; }

function ssReverse(num){

for(let i=num.length-1;i>0;i--){
    
    return i;
}
 
}
