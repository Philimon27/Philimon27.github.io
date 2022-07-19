

//     //typescript
class PhoneNumber { 
    areacode:number;
    number:string
    constructor(areacode:number, number:string) {
    this.areacode = areacode;
    this.number = number; }
    getPhoneNumber():string {
    return this.areacode + this.number;
    } }
    const person :{
        name:string,
        phoneNumbers: typeof PhoneNumber.prototype[]
    }= {
    name: 'John Smith',
    phoneNumbers: [new PhoneNumber(641, "4511111"), new PhoneNumber(641, "4512222")]
    };








//     // Interface
    interface Iemployee{
        empId:number;
        calcMonthlyPay():number;
    }
    class Hourly implements Iemployee{
   
         constructor(public empId:number, public hourlyWage:number, public hoursperWeek:number){
            //  this.empId=empId;
            //  this.hourlyWage=hourlyWage;
            //  this.hoursperWeek=hoursperWeek;
             
         }
        calcMonthlyPay():number{
      return this.hourlyWage*this.hoursperWeek*4;
        }
     

    }
    class Department {
        empId: string = 'Dept01';
        employees = [new Hourly(610001, 15, 6), new Hourly(610002, 16, 8), new Hourly(610003, 20, 5)];
         calcMonthlyAverageSalaryOfDepartment() {
        //implement this method only, no need to copy other parts of Department class in your answer
          let sum=0;
          for (let item of this.employees) {
              sum+=item.calcMonthlyPay();
          }
          let avg= (sum)/(this.employees.length);
          return avg;
     }
        }

        // Bank Account object

        let bankAccount:{
            money:number,
            deposit(value:number):void
        
        }={
            money:2000,
            deposit(value:number):void{
                this.money+=value;
            }
        };
        
        let myself:{
           name:string,
           bankAccount:typeof bankAccount,
           hobbies: string[];
        }={
            name:"john",
            bankAccount:bankAccount,
            hobbies:["violin","cooking"]
        };

    
