     "use strict"
/**
 * 
 * @param {Number} num of prime
 * @returns {Number} returns largest prime number
 */
  function findLongestprime(num){

    if(num<1){
        return 0;
    }
      let largestPrimeNum=2;
      for(let i=2;i<num;i++){
          if(num%i==0 && i>2){
              largestPrimeNum=i;
          }
      }

      return largestPrimeNum;
  }
 findLongestprime(10);
 