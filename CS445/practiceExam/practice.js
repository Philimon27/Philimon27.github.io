// console.log("start");

// async function foo() {
//   return "done!";
// }
// async function bar() {
//   console.log("inside bar - start");

//   console.log(await foo());

//   console.log("inside bar - end");
// }

// bar();

// console.log("end");
  /*
  ****OUTPUT****
  strat
  inside bar - start
  end
  done
  inside bar - end'
*/


// setTimeout(() => console.log('setTimeout results'), 0); 
// console.log('Code starts');
// new Promise((resolve) => {
//     console.log('Promise starts');
//     resolve(`Promise results`); 
//   }).then(console.log); 
//     console.log('Code ends');


  
    /** OUTPUT
     *  code starts
     *  promise starts
     *  code ends
     *  promise results
     *  settime out results
     */


     
    //  async function f() {
    //     let result = 'first!';
    //     let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('done!'), 1000); });
    //     result = await promise;
    //     console.log(result);
    //     }
    //     f();

    // String.prototype.reverse= function(){
    //     let arr=this.split("")
    //     console.log(arr.reverse().join(""));
    // }
    // String.prototype.reverseAsync=function(){

    //   new Promise((resolve,reject)=>{
    //       let arr=this.split("")
    //       resolve(arr.reverse().join(""));
    //   }).then(res=>console.log(res))
    // }
    
//     function x(){
// console.log({ 1: this });
// const obj = {
// f: function () {
// console.log({ 2: this })
// }
// }
// obj.f();
// const m = obj.f;
// m.apply();
// setTimeout (function () {console.log({3: this}), 1000} );
// setTimeout (() => {console.log({ 4: this }) }, 1000);
//     }
// const y = new x();



// const wait = (
//     time,
//     cancel = Promise.reject()
//     ) => new Promise( (resolve, reject) => {
//     const timer = setTimeout (resolve, time);
//     const noop = () => { };
//     cancel.then(() => {
//     clearTimeout(timer);
//     reject(new Error('Cancelled')) ;
//     }).catch (noop);
//     });
//     const shouldCancel = Promise.resolve();
//     wait (2000, shouldCancel).then(
//     () => console.log( 'Hello!'),
//     (e) => console.log(e));


// console.log( "Start");
// function myPromise() {
// console.log('A');
// Promise.resolve('B').then(res=>console.log(res))
// return new Promise (resolve => {
// console.log('C')
// setTimeout(() => resolve('D'), 0)
// console.log("E")
// })}
// (async function myFunction() {
// console.log("F")
// const result = await myPromise();
// console.log(result)
// setTimeout (() => console.log('G'), 0)
// console.log("H")
// })()
// console.log('End');
//output..... Start,F,A,C,E,END,B,D,H,G
   

// reversing an array asynchronsly

// Array.prototype.newReverse=async function(){
//   let arr=this;
//   console.log( await helper(arr))
// }

// async function helper(arr){
//    return arr.reverse();
// }

Array.prototype.newReverse= function(){
     let arr=this;
 return   new Promise((resolve,reject)=>{
   
    resolve(arr.reverse())
  }).then(data=>console.log(data))
}

console.log("start");
[1,5,2,9].newReverse();
console.log("end");



//  async function calcTotalPrice(category){
//     let res= await fetch("http://www.example.com/" + category);
//     let json= await res.json();
//     let shop= await fetch("http://www.example.com/product?shoppingcart.")
//     let shopJson= await shop.json();
//        shopJson.forEach(element => {
            
//        });
//     let cart= await fetch("http://www.example.com/product?productID=1.")
  
// }


// async function getAverageGrade() {
//   let students = await fetch('http://www.example.com/students/').then(response=>response.json());
  
//   students.map(student => {
//   student.grade = [];
//   student.courses.forEach(courseId => {
//   let obj = await fetch('http://www.example.com/grade?studentId='+ student.id+"&courseId=" + courseId)
//   .then(student.grade.push(obj.grade));});
//   student.average = student.grades.reduce((average, grade, index, array)=>average + grade / array.length, 0);
//   console.log({name: student.name, averageGrade: student.average })
//   })
// }
