"use strict"

class Squares{
    constructor(side){
        this.side=side;
    }
    area(){
        return this.side*this.side;
    }
}
class MorphableSquare extends Squares{
    constructor(side,color,className){
    super(side);
        this.color=color;
        this.className=className;
    }
    morph(){
         return this.className=this.color;

    }
  
}

const morph2blue = new MorphableSquare(3, "blue", "white");
const morph2green = new MorphableSquare(3, "green", "white");
 console.log("expect 9: ", morph2blue.area());
console.log("expect 3: ", Object.getOwnPropertyNames(morph2blue).length);