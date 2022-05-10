"use strict"

const myFilterFunction=function(){
       const newArray=[];
       
       for(let i=0;i<this.length;i++){
        if(!newArray.includes(this[i])) newArray.push(this[i]);
           
       }
       return newArray;
   }
   Array.prototype.removeDuplicatesAsync= myFilterFunction;
   let arr=[4,5,6,8,9,4,4,5]
  console.log(arr.removeDuplicatesAsync()); 
  
