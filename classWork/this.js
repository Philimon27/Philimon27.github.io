//"use strict";  
/* eslint-disable */

// /**
//  * @returns {undefined}
//  */
// function setLatLong() {
//     this.lat = 41.00;
//     this.long = -92.96;
//     console.log(this);
//   }

//   const setLL = setLatLong(); // undefined
//   console.log("lat : ", lat);
//   console.log("setLL : ", setLL);


  
function debit(amount) {
console.log(this)
this.balance = this.balance - amount;
console.log(this.balance);}
const account = { balance: 10, debit: debit }
const myDebit = account.debit
myDebit(5)