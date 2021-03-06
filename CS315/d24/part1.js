"use strict";



/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// 
/**
 * 
 * @param {number} num any number
 * @returns {number} the sum of all the numbers from 1 - num.
 */
function sumTo(num){
    if(num===1){
        return 1;
    }else{
        return num + sumTo(num-1);
    }
}

/**
 * 
 * @param {number} num  any number greater than one.
 * @returns {number} the product of all the numbers from 1-num
 */
function factorial(num){
    if(num===1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

/**
 * 
 * @param {number} num any number
 * @returns{number} sum of the fibonacci numbers.
 */
function fibonacci(num){
if(num<=1){
    return num;
}else {
    return fibonacci(num-1) + fibonacci(num-2);
}
}


// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };


/**
 * 
 * @param {Object} listObj a list of objects.
 *  @returns{undefined} doesnt return anything.
 */
  function outputList(listObj){
    if(listObj.next===null){
        console.log(listObj.value);
    }else{
        console.log(listObj.value);
        outputList(listObj.next);      
    }
     return "1 2 3 4 printed to console";

  }


/**
 * 
 * @param {Object} listObj a list of objects.
 *  @returns{undefined} doesnt return anything.
 */
  function outputListLoop(listObj){
    while(listObj!==null){
        console.log(listObj.value);
        listObj = listObj.next;
    }
     return "1 2 3 4 printed to console";
  }

/**
 * 
 * @param {object} listObj a list of objects.
 * @returns{undefined} doesnt return anything.
 */
  function reverseList(listObj){
      if(listObj.next===null){
          console.log(listObj.value);
      }else{
          reverseList(listObj.next);
          console.log(listObj.value);
      }
      return "4 3 2 1 printed to console";
  }

/**
 * 
 * @param {Object} listObj list of objects.
 * @returns {undefined} returns nothing just print to the console.
 */
  function reverseListLoop(listObj){
  let nodes = [];
  let temp = listObj;

  while(temp!==null) {  
    nodes.push(temp.value);
    temp = temp.next;
  }
 for(let i= nodes.length-1;i>=0;i--){
     console.log(nodes[i]);
 }
 return "4 3 2 1 printed to console";
}



/**
 * 
 * @param {object} node node objects.
 * @returns{undefined} no return.
 */
function showValueRecursive(node){
    if(node.children==null){
        console.log(`${node.name} : ${node.value} `);
    }
    else{
        for(let subNode of node.children){
           showValueRecursive(subNode);
        }
        console.log(`${node.name} : ${node.value} `);
    }
    }


/**
 * 
 * @param {Object} node node object.
 * @returns {undefined} no return.
 */
    function showValueNameLooping(node){
        console.log(`${node.name} : ${node.value} `);
            if(node.children!==null){
                for(const kid of node.children){
                   console.log(`${kid.name} : ${kid.value} `);
                   if(kid.children!==null){
                       for(const baby of kid.children){
                         console.log(`${baby.name} : ${baby.value} `);  
                       }
                   }
                }
            }
          
        
    }


     const COLLECTION_NAMES =[];
/**
 * 
 * @param {Object} node list of objects.
 * @returns{Array} a collection of names.
 */
    function collectValues(node){
         COLLECTION_NAMES.push(`${node.name} : ${node.value}`); 
        if(node.children!==null){
            for(const kid of node.children){
                COLLECTION_NAMES.push(`${kid.name} : ${kid.value}`);
                if(kid.children!==null){
                    for(const baby of kid.children){
                       COLLECTION_NAMES.push(`${baby.name} : ${baby.value}`); 
                    }
                }
            }
             
        
    }
            return COLLECTION_NAMES;
     }



    
// showValueNameLooping(node1);


       


  