"use strict"
const student1={
    studentId: "s101",
    quizAnswers:[1,1,2,4]
}
const student2={
    studentId : "s102",
    quizAnswers:[2,1,2,2]
}

const student3={
    studentId : "s103",
    quizAnswers:[3,1,3,4]
}
 let quiz=[ student1,student2,student3];
 
 /**
  * 
  * @param {*} quiz 
  * @param {*} correctAnswers 
  * @returns 
  */

 function gradeQuiz(quizArr,correctAnswers){
let quiz=[]
    for(let i=0;i<quizArr.length;i++){
        let count=0
        for(let j=0;j<quizArr[i].quizAnswers.length;j++){
        if(quizArr[i].quizAnswers[j]===correctAnswers[j]){
              count=count+1
            }
           
              
    }
    quiz.push(count)
  
 }  
 return quiz

}

function objectCompare(quiz){
   const value= quiz.map((item)=>
   quiz.studentId=item[item.studentId]
   item.quizAnswers=gradeQuiz()

   
   )




}



 console.log(gradeQuiz(quiz,[3,1,2,4]));



 
