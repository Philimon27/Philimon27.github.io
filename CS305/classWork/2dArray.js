


   "use strict"
  function addingArray(array){
    let sum;
    let rowSum=[];
for (let i = 0; i < array.length; i++) {
             sum=0;
    for (let j = 0; j < array[i].length; j++) {
        sum+=array[i][j];
       
    }
      
    rowSum.push(sum)
}
return rowSum;
}

let matrix = [ 
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]];

console.log("The sum is  " +  addingArray(matrix));
   