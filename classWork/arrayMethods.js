"use strict"
/**
 * foreach and filter class work
 */
let arr=[1,5,16,3,108];
    arr.forEach(function(element){
        if(element%2==0){
           console.log(element)
      }

    });

    arr.filter(element=> {if(element%2==0) return true})

console.log( "even is " + (arr.filter(element=> {if(element%2==0) return true})))

//find and findIndex examples
const num=[1,5,18,77,108]
    let x= num.find(item=> {if(item%2===0) return true})
     let y=num.findIndex(item=>{if(item%2===0) return true})
console.log(x)
console.log(y)

//map examples
let lengths=["bilbo","gandalaf","nazgul"]
lengths.map(function(item,index){
    return index+ "," + item.length;   //the output looks [(0,5),(1,7),(2,6)
})
//sorting descending
let sorting=[1,15,12]
   sorting.sort((a,b)=>b-a)
//sorting letters ascending
   let sortLetters=["c","b","a"]
   sortLetters.sort()

   // reduce method
   let red=[1,2,3,4,5]
   red.reduce((prod,current)=>{return prod*current},1);//120
   red.reduce((val,current)=>{return Math.max(val,current)},0)//5
   red.reduce((max,current)=> max>current?max:current,0)


   const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];


 function maxPoints(players){
     let max;
for(let item of players){
    
    if(item.points.reduce((sum,curr)=>sum+curr,0)>max){
        max=item.points.reduce((sum,curr)=>sum+curr,0)
    }
    
    
}
 return max;
 }
   console.log(maxPoints(players))
   
