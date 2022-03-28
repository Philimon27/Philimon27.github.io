"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){

return arr.map(num => num * 2);
}

function doubleAges(arr){
   
    return arr.map(item => ({name : item.name,
        age : item.age *2}))
            
}

function filterEven(arr){
    return arr.filter(item => item%2===0);

}

function filterOver10(arr) {
    return arr.filter(item => item.age >10);


}

function findEvenNum(arr){
    return arr.find(number => number%2==0);

}

function findEvenAge(arr){
    return arr.find(people => people.age%2===0);

}

function includesEvenNum(arr){
    let num = arr.find(item => item%2===0);
    return arr.includes(num);

}

function includesEvenAge(arr){
    let people = arr.find(item => item.age%2===0);
    if(people.age!== undefined){
        return true;
    }else {
        return false;
    }
}
function reduceSum(arr){
    return arr.reduce((sum,current)=>sum+current,0)
}
function reduceMax(arr){
    return arr.reduce((max,current)=>max>current?max:current,0)
}
function reduceAverage(arr){
    return arr.reduce((sum,current)=>sum+current/arr.length,0)
}
function reduceMaxOfAges(arr){
    return arr.reduce((max,current)=>max>current.age?max:current.age)
}
function chainEvenAverage(arr){
    return arr.map(item =>item.age).filter(item=>item%2===0).reduce((sum,current)=>sum+current,0)/(arr.map(item =>item.age).filter(item=>item%2===0).length)
}
function chainOddAverage(arr){
    return arr.map(item =>item.age).filter(item=>item%2===1).reduce((sum,current)=>sum+current,0)/(arr.map(item =>item.age).filter(item=>item%2===0).length)
}

