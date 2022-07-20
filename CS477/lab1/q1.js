//Write the necessary Node script to make this code work for all arrays:
// [1,2,3,4,5,6,7,8].even(); 
//[1,2,3,4,5,6,7,8].odd(); [1,3,5,7] 
// Test your code in Node.JS CLI
   let arr=[]
  Array.prototype.even=function(){
   
      for(let i=0;i<this.length;i++){if(this[i]%2==0) arr.push(this[i])}
      return arr
         
  }
  Array.prototype.odd=function(){
    let arr=[]
      for(let i=0;i<this.length;i++){if(this[i]%2==1) arr.push(this[i])}
      return arr
         
  }
  console.log([1,2,3,4,5,6,7,8].even())//[2,4,6,8] 
  console.log([1,2,3,4,5,6,7,8].odd())//[1,3,5,7]

     