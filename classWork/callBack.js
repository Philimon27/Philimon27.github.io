       "use strict"
// • write a function, multiplyEvens, that can be called with any number of arguments and returns the product of the even arguments
// • do first using the arguments object • then using ...rest parameter
     // using argument objects
  function multiplyEvens(){
      let result=1;
         for(const element of arguments){
             if(element%2==0){
                 result*=element;
             }
         }
       return result;
  }
  multiplyEvens(3,6,12)
  console.log(multiplyEvens(3,6,12))// output is 72

  //using rest parameter

  function multiplyyEvens(...rest){
    let result=1;
       for(let i=0;i<rest.length;i++){
           if(rest[i]%2==0){
               result*=rest[i];
           }
       }
     return result;
}

multiplyyEvens(3,6,12)
console.log(multiplyEvens(3,6,12))//output is 72