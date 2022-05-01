"use strict"

class Regular {
    constructor() {
      this.range = "70";
      this.year="1";
}
}
class Energy{
constructor(color) {
    this.range = "18";
    this.year="10";
    this.color=color;
}
}
   class Factory {
    createBulb(type) {
      let bulb;
    if (type === "regular") {
      bulb = new Regular();
    } else if (type === "energy") {
      bulb = new Energy("red");
        }
    bulb.type = type;

    
    return bulb;
    }
    }


       
        const bulbs = [];
        const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}

       