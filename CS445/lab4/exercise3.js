 "use strict"
 class Info{
     
     logging(input){
         console.log(input)
     }
 }
 class Warn{
    logging(input){
        console.log(input)
    }
}
class Error{
    logging(input){
        console.log(input)
    }
}
class Table{
      
    logging(input){
        // let tableArray=[];
        // tableArray.push(input);
          console.log(input)
    }
}

class Strategy{
     console="";
     setStrategy(console){
     this.console=console;
     }
     logging(input){
       this.console.logging(input);
     }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);