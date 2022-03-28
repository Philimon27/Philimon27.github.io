"use strict";

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
   
  };
  const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHi() {
       console.log("my name is " + this.name + " i am " + this.age + " my job is " + this.job)
  }
  
  // add sayHi function to both objects
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  Intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'