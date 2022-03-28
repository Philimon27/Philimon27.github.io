    "use strict"
/**
 * 
 * @param {Array} array of 
 * @returns {Number} number
 */
 function findAverage(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i]
    }
    return (sum/array.length)
}
const scores=[10,20,30,40,50];
let output= findAverage(scores);
console.log(output);

const random=[];
    for(let i=0;i<10;i++){
        random[i]=Math.ceil(Math.random()*10);
    }
    let lastOutPut=findAverage(random);
    console.log(lastOutPut);

