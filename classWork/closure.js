   
   "use strict"
   function makeCount(){
        let count=0;
        let countes=function counter(){
            return count+=1;
        };
        return countes;
   }
   let x=makeCount()
     x()
     x()