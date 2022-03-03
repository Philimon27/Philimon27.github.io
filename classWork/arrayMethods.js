"use strict"
/**
 * foreach and filter class work
 */
let arr=[1,5,16,3,108];
//    arr.forEach(function(element){
//        if(element%2==0){
//            console.log(element)
//        }

//    });

//    arr.filter(element=> {if(element%2==0) return true})

// console.log( "even is " + (arr.filter(element=> {if(element%2==0) return true})))

const num=[1,5,18,77,108]
    let x= num.find(item=> {if(item%2===0) return true})
     let y=num.findIndex(item=>{if(item%2===0) return true})
console.log(x)
console.log(y)