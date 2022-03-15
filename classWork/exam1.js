     "use strict"

  
   // "use strict"
//  function scotland(){

// let abeerden={
// origin:true,
// expression: function(){
// console.log(this);
// }
// }
//  let innerFn=abeerden.expression;
// innerFn();
// abeerden.expression();

// }
// scotland();

//question 6
// function makeSecure(){

//   let arr=[];
//   return function sec(element,operation){
//    if(operation=="push") arr.push(element);
//   if(operation=="pop") return arr.pop();
//   if(operation=="view") return [...arr];
  
  
  
//   }
//   }
  
//   const secure=makeSecure();
//      secure(1, "push");
//      secure(2, "push"); 
//      secure(3, "push");
  
//   console.log("expect 3: ", secure(null,"pop"));
//   console.log("expect undefined: ",secure(55, "push"));
//   console.log("expect [1,2,55]: ",secure(null, "view"));

  //question 7
  function Incrementor(initial){
  
    let value=initial;


  this.incrementor={
    increment:function(num){
         let x= value
      return x+num;
    },
    decrement:function(num){
       
      return value-num;
    }
  }
  }
 
  const inc= new Incrementor(100);
  console.log(inc.incrementor.increment(19));//119
  console.log(inc.incrementor.increment(19));//138
  console.log(inc.incrementor.decrement(19));//119
  console.log(inc.value);//