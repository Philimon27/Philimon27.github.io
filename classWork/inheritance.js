 "use strict"

// let head={
//     glasses:1
// };
// let table={
//     pen:3,
//     __proto__:head
// };
// let bed={
//     sheet:1,
//     pillow:2,
//     __proto__: table
// };
// let pockets={
//     money:2000,
//     __proto__ :bed
// };

// console.log("expect 3: ", pockets.pen); 
// console.log("expect 1: ", bed.glasses);
 
// the inherited object modifying the ancestors state example

// // animal has methods 
//      let animal = {
//     walk: function() {
//         if (!this.isSleeping) {
//        console.log("I walk"); }
//         },
//         sleep: function() {
//         this.isSleeping = true; }
//         };
//         let rabbit = {
//         name: "White Rabbit", __proto__: animal
//         };
//         // modifies rabbit.isSleeping 
//            rabbit.sleep();
//         console.log(rabbit.isSleeping); // true
//         console.log(animal.isSleeping);//undefined

        
        /*
        Excercise
        /complete the code so that the above functions reside in a single object and are inherited by all User 
        objects that are created using User as a constructor function.
        */

        function User(firstname, lastname, birthDate) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.birthDate = birthDate;
            }
            User.prototype.getFullName = getFullName;
            User.prototype.getAge=getAge;

            let user1 = new User('John', 'Smith', new Date('2000-10-01'));
            let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
             
            function getFullName() { return this.firstname + ' ' + this.lastname;}
            function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}
            
            console.log(user1.getFullName()); //John Smith 
            console.log(user1.getAge()); //22