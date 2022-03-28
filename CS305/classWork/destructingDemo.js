
    "use strict"

 
   let [bob,fred,jim]= ["Bob","Fred","Jim"]
   console.log(fred)
   
//    //object destructing
//    ({title, width, height} = {title: "Menu", width: 200, height: 100});
//    console.log(height)

// 1. destructure the team object onto variables with the same names as the properties

const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }

let {point,shooting,power,small,cenetr}=team;
  console.log(point)

let {point:one,shooting:two,power:four,small:three,center:five}=team;
  console.log(four)