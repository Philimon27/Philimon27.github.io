/*squares have property, side, and method, area. The area method should be shared by all square objects
Create square objects using: 
➢ object literal (with width 5)
➢ constructor function
➢ class
➢ use the skeleton code on the next slide to test
*/
let protoSquare={
    side:5,
     area: function() { return this.side * this.side } 
}

class squares{
    constructor(side){
        this.side=side;
    }
    area(){
        return this.side*this.side;
    }
}
const neb= new squares(5);
//using constructor
function Square(side){
     this.side=side;
}

Square.prototype=protoSquare;
const square1 = new Square(5)
    
console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
const constSquare1 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
const classSquare = new squares(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);