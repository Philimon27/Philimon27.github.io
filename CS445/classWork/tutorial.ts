export{}
let x =15;
 let y = "hi";
 let z =true;

 //annotations

//  let a:number=10;
//  let b: string="value b";
//  let c: boolean=true;

 //it's always recommended to use type annotations than type inference
  
 //any type
 //this is how java script considers any variable (as a type any)
//    let info: any;
//    info=10;
//    info="hello";
//    info=true;

   //enumeration
  enum EyeColor{Brown,Black,Blue};
 let  myEyeColor=EyeColor.Brown;
 console.log(myEyeColor)//outputs 0
 console.log(EyeColor[myEyeColor]);// outputs Brown

 //Array and tuples

 // using square brackets
 let strArr: string[]=["hello","abe"]
 // using generic array type
let strARR2: Array<string>=["hello","abe"]

let anyArr:any[]=["hello",10,true];
//tuples
 let myTuples: [string,number]=["hi",10];
 console.log(myTuples[0])
 console.log(myTuples[1])
 myTuples.push(2,100);
 console.log(myTuples);

 // class constructors

 class Person{

     public fname:string;
     public lname:string;
     constructor(fname:string,lname:string){
         this.fname=fname;
         this.lname=lname;

     }
 };
  // this is the equivalent for the above class using typescript
 class Person1{
     constructor(public fname:string,  public lname:string){

     }
 }
 //Interfaces

 interface Person{
     fname:string;
     lname:string;
     age?:number;
 }
 let employee1: Person={
     fname:"chandler",
     lname:"bing",
     age:30
 }
 let employee2 :Person={
     fname:"ross",
     lname:"geller",

 }
 // union type
 //allows us to use more than one data type for a variable or a function or parameter
    let course:(string|number);
    let data: string|number;
    function process(code : (string |number)){
    }
// default and optional parameters 
// optional
function add(num1:number,num2?:number){
    if(num2){
        return num1+num2;
    }
    else 
       return num1
}
add(10,5)//15
add(5);//5
// default parameters are like optional value with set value instead of undefined
function sub(num1:number,num2:number=10){
    if(num2){
        return num1-num2;
    }
    else 
       return num1
}
sub(5,10)//-5
sub(5)//-5


//Interface
interface Iperson{
    firstName:string,
    lastName:string
}
 function fullName(person: Iperson){
     console.log(`${person.firstName}${person.lastName}`);
 }
let p={
    firstName:"bruce",
    lastName:"wayne"
};
fullName( p);
// class and inheritance
  class Employee{
      employeeName:string
      constructor(employeeName:string){
          this.employeeName=employeeName
      }
      greet(){
          console.log(`good mornning ${this.employeeName}`)
      }
  }
  let employee= new Employee("fil");
  console.log(employee.employeeName);
  employee.greet();

  class Manager extends Employee{
      constructor(managerName:string){
          super(managerName);
      }
      delegeteWork(){
          console.log(`maanger delegating tasks`)
      }
  }
  let m1=new Manager("bruce");
  m1.delegeteWork();
  m1.greet();
  console.log(m1.employeeName);
  
       // ****Access Modifiers****
     // Private modifiers can be accessed always with in the class only
     // protected modifiers can be accessed always with in the class and derived class  only
     // Public modifiers are free of accessibility