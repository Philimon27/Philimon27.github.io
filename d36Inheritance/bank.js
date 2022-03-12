   "use strict";
  //module.exports = { MakeBank };
 /**
  * {constructor function}
  */
function MakeBank(){

this.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }]

}
MakeBank.prototype.getBalance= function (ids) {
    const customer = this.transactionsDB.find(customer => customer.customerId === ids);
    let balance = 0;
    for (const trans of customer.customerTransactions) { 
        balance += trans; 
    }
return balance;
}
MakeBank.prototype.bankBalance =function () {
let total = 0;
for (const trans of this.transactionsDB) {
    total += this.getBalance(trans.customerId);
}
return total;
}
  


const bank= new MakeBank();


  
