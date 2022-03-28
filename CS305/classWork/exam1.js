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

  // //question 7
  // function Incrementor(initial){
  
  //   this._value=initial;

  // }
  // Incrementor.prototype ={
  //   increment:function(num){
         
  //     return this._value=this._value+num;
  //   },
  //   decrement:function(num){
       
  //     return this._value=this._value-num;
  //   }
  // }


 
  // const inc= new Incrementor(100);
  // console.log(inc.increment(19));//119
  // console.log(inc.increment(19));//138
  // console.log(inc.decrement(19));//119
  // console.log(inc.value);//undefined


  //question 8
  
//   function Sensors(id, name, type, manufacturer,events){
//     this.id = id;
//     this.name = name;
//     this.type = type;
//     this.manufacturer = manufacturer;
//     this.events=events;
//   }
//     let findSensorsByType= function(arr,kind){
//       let result=[];
//            for(let element of arr){
//              if(element.type==kind){
//                 result.push(element.id);
//              }
//            }
//            return result;
//     };
//     let collectManufuctureres=function(arr){
//        let outPut=[];
//         for(let element of arr){
//            if(!outPut.includes(element.manufacturer)){
//             outPut.push(element.manufacturer)
//            }
           
//         }
//    return outPut;
//     }
//     let getLatestEventofSensor=function(arr,id){
//             let res= arr.find(item=>item.id===id);
//            return  res.events.reduce((eve,current)=>current.time>eve.time?current:eve);
//     }



// let frontDoor = new Sensors(1, "Front Door Sensor",34, "Climax", [{time: 100, name: "Door Closed"},{time: 101,name :"DoorOpened"}]);
// let motionSensor = new Sensors(2, "Motion Sensor", 43, "NYCE", [{time: 100, name: "Motion Detected"}]);
// let porticoLight = new Sensors(3, "Portico Light",54, "Osram", [{time: 100,name:"Light off"}]);
// let mainEntrance = new Sensors(4, "Main Entrance",34, "Climax", [{time: 100,name: "Door Closed"}]);
// let list = [frontDoor,motionSensor,porticoLight,mainEntrance];//,lightBulb]

// console.log(findSensorsByType(list,34))//[1,4]
// console.log(collectManufuctureres(list));//["climax","NYCE","osram"]
// console.log(getLatestEventofSensor(list,1))

// // question 9
//     function reverseAll(str){
//         let res= str.split("");
//         let out=[]
//         for(let i=res.length-1;i>=0;i--){
//           let x=[]
//              for(let j=res[i].length-1;j>=0;j--){
//                   x.push(res[i][j]);
//              }
//             out.push(x);
//         }
//            return out.join("")
//     }
  
// console.log( reverseAll("abebe beso bela"));

// //my filter 



// function myFilter(arr,fn){
//   let result = [];
//   for(let i =0;i<arr.length;i++){
//         let callbackResult = fn(arr[i],i);
//         if(callbackResult){
//              result.push(arr[i]);
//         }
// }
//   return result;
// }
// myFilter(arr,function(value,index){
//   return value%2===0}
// );

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     } 
//     current++;
//   }, 3000);
// }

// // usage:
// printNumbers(5, 10);
function countdoumn(from) {

 // setTimeout(()=>setInterval(tick,1000),3000);

const timerId = setInterval(tick, 1000);
   let count =from;
function tick(){
  console.log (count);
if (count<=0) {
  clearInterval(timerId)
} 
    count=count-1;}


}
console.log(countdoumn(2))
