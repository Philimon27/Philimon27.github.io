    "use strict"
  
  let counterModule=(function(){

       let  count=0;
     return  {   
         incrementCounter(){
              return count+=1;
          },
          resetCounter(){
              count=0;
          }
        }

  })();
      console.log(counterModule.incrementCounter());
      console.log(counterModule.incrementCounter());
      console.log(counterModule.incrementCounter())
      counterModule.resetCounter();
      console.log(counterModule.incrementCounter())