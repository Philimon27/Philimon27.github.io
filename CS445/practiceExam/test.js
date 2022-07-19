
//  "use strict"
// var courseName="CS445";
// const obj = {
// courseName: "Algorithm",
// prop: {
//      courseName:"MWP",
//      getCourseName: function (){
//         return this.courseName;
//     }
// }
// }
// console.log(obj.prop.getCourseName());
// const test = obj.prop.getCourseName;
// console.log(test());

// const arr=[1,2,3];
//   function arrAdd(arr,n){
//       return arr.concat(n);
//   }
//  function  arrRemove(arr,n){
//       return arr.filter(item=>item!==n)
//   }
//   console.log(arrAdd(arr,4))
//   console.log(arrRemove(arr,4))



// *****Observables******

//{'event': [observers]}
//For example:
// {
//     "workout": [function1, function2],
//    "sleep": [function3, function4, functions]
// }

   class Subject{
       observers={}
       subscribe(event,fn){
              if(this.observers[event]){
                this.observers[event].push(fn)
              }
              else{
                  this.observers[event]=[fn];
              }
       }
       notify(event){
            if(this.observers[event]){
                this.observers[event].forEach(item=>item())
            }
            
          
       }
       unsubscribe(event,fn){
        
            this.observers=this.observers[event].filter(f=>f!==fn)
         
       }

   }

  let subject=new Subject();
//This Observable/Subject should be used as following:
subject.subscribe("workout",function1) //register an observer to event workout
subject.subscribe("workout", function2) // register an observer to event workout

subject.notify("workout");

  function function1(){
      console.log("this is fn 1")
  }
  function function2(){
    console.log("this is fn 2")
}

     
  
   subject.subscribe("sleep",function3)// register an observer to an event sleep
   subject.subscribe("sleep",function4)// register an observer to an event sleep
   subject.subscribe ("sleep",function5) // register an observer to an event sleep

   subject.notify("sleep");

function function3(){
    console.log("this is fn 3")
}
function function4(){
  console.log("this is fn 4")
}
function function5(){
  console.log("this is fn 5")
}


// all observers of event "sleep (function3, functtond, and function5) should be invoked
 
subject.unsubscribe("workout",function2) // remove Listener from event workout
// function1 observer will be invoked only
// console.log(subject.observers)

subject.notify("workout");


//Module pattern
      const myModule=(function(){
          
       return  { isTwoPassed: function(...arguments){
                 if(arguments.includes(2)){
                     return true;
                 }
                 return false;
            },
            mySum:function(x,y=0){
                let sum=0;
                   return  sum+= x+y;
                 
            }
        }

            }
          
      )();
console.log(myModule.isTwoPassed(1,4,7)) // false
console.log(myModule.isTwoPassed(5,3,1,2)) // true
console.log(myModule.mySum(2,3));//output 5
console.log(myModule.mySum(2)(3));

   
