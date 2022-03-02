/**
 * using regular function
 * @param {Function} func 
 * @param {Number} arg 
 */
function myCallBack(func,arg){
   const  returnVal= func(arg)
   console.log(returnVal)
}
function cube( num){
      return num*num*num;
}
myCallBack(cube,10);

/**
 * using annonyms function
 * @param {Function} func 
 * @param {Number} arg 
 */

let mycallBack=function(func,arg){
    
    const  returnVal= func(arg)
   console.log(returnVal)
};
 let cube=function(num){
     return num*num*num;
 };
mycallBack(cube,25)
