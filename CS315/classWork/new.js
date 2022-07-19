"use strict"
let company = {
        sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
        development: {
            sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
            internals: [{ name: 'Jack', salary: 1300 }]
        }
    };
    
    
    
    
      function getKeysinArray(department){
        let names = [];
        if (Array.isArray(department)) {
                // for(let item of department){
                //     if( typeof item=="object"){
                //         for( let inner in item){
                //             names=names.concat(inner);
                //         }
                //     }
                // }
                // names=names.concat(department);
                return [];
        }
       
            else{
            
            for (let subdep in department) {
                names.push(subdep);
                
                names = names.concat(getKeysinArray(department[subdep]))
            }}
        
    
       
    return names ;
    
      }
      console.log(getKeysinArray(company));
 