 "use strict"


let json = {
    "glossary": {
    "title": "example glossary",
    "GlossSeeAlso": {
    "title": "S",
    "GlossList": {
    "GlossEntry": {
    "ID": "SGML",
    "SortAs": "SGML",
    "GlossSeeAlso": "Standard Generalized Markup Language",
    "Acronym": "SGML",
    "Abbrev": "ISO 8879:1986",
    "GlossDef": {
        "para": "A meta-markup language, used to create markup languages such as DocBook.",
    "GlossSeeAlso": ["GML", "XML","S"]
              },
    "GlossSee": "markup"
     }
     }
     }
     }
     };

         
        /*
          Printing all the keys
        */

    //  function printKeys(obj){
       
    //     for(let k in obj){
    //         if(typeof obj[k]=="object"&& !Array.isArray(obj[k])){
    //             console.log(k)
    //            printKeys(obj[k])
              
    //         }
    //         else{
    //            console.log(k)
              
    //         }
    //     }
     
    //  }
    //  console.log(printKeys(json))
       
        
        /*
          Counting all the keys
        */

    //  function countKeys(obj){
    //     let count=1;
    //     for(let k in obj){
            
    //         if(typeof obj[k]=="object"&& !Array.isArray(obj[k])){
    //             count+=countKeys(obj[k])
    //         }
    //         else{
    //          count=count+1;
    //         }
    //     }
    //     return count;
    //  }
    //  console.log(countKeys(json))

      

        /*
         Listing all the leaf nodes
        */
    //  function listLeaves(obj){
    //       let leafNodes=[];
    //     for(let k in obj){
    //           let leaf={}
    //          if (typeof obj[k] !== 'object' ||Array.isArray(obj[k])){
    //           leaf[k]=obj[k];
    //           leafNodes.push(leaf);
    
    //         }
    //         else{
    //             let newVal=listLeaves(obj[k]);
    //             leafNodes=leafNodes.concat(newVal);
    //         }
        
            
            
    //     }
    //     return leafNodes;
    //  }
    //  console.log(listLeaves(json));


        /*
          Finding all the keys with the given value 
        */
    // function findAllKeysWithGivenValue(obj, val) {
    //     let result=[];
    //     for ( let key in obj) {
    //       if (obj.hasOwnProperty(key)) {
    //         if (obj[key] === val) {
    //            result=result.concat(key);
    //         } if(Array.isArray(obj[key])){
    //           let res=obj[key].filter((item)=>item===val)
    //           if(res.length>0) result.push(key);
    //         }
            
    //         else if (typeof obj[key] === 'object') {
    //           var newVal = findAllKeysWithGivenValue(obj[key],val);
              
    //         result=result.concat(newVal)
              
    //         }
           
    //       }
    //     }
    //     return result;
    //   }
    //  console.log(findAllKeysWithGivenValue(json, "S"))

        /*
          Finding all the values of the given key
        */

     function findvaluesOfGivenKey(obj, val) {
        
       
          if (Array.isArray(obj) || typeof obj != 'object'){
        return [];
      }
      let result=[];
        for ( let key in obj) {
              if(key==val){
                 result.push(obj[key])}
              var newVal = findvaluesOfGivenKey(obj[key],val);
              result=result.concat(newVal);
              
            }
          
        
        return result;
      }
      console.log(findvaluesOfGivenKey(json,"GlossSeeAlso"));
