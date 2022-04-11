
function TreeNode(value) { 
    this.value = value; 
    this.descendents = [];
    }
    // create nodes with values
    const body = new TreeNode(null);
     
    const div = new TreeNode(null); 
    const label = new TreeNode("Name");
    const input = new TreeNode("userInput");
    const p = new TreeNode("This is text in the paragraph");
    // associate root with is descendents 
    body.descendents.push(div,p); 
    div.descendents.push(label, input);
    
//   //Part 1 Q1. Using Recursiove function
    function printNamevalue(trees){
            if(trees.descendents===[]){
                console.log(`name : ${trees.value}`);
            }else{
                for(const tree of trees.descendents){
                    printNamevalue(tree);
                }
                console.log(`name : ${trees.value}`);
            }  
        }
         printNamevalue(body);

//    //Using iteration
  function printValuesIteratively(trees){
               console.log(`name ${trees.value}`)
        if(trees.descendents!=null){

             for(const  tree of trees.descendents){
                 console.log(`name: ${tree.value}`)
               if(tree.descendents!=null){
                        for (const leaf of tree.descendents) {
                            console.log(`name: ${leaf.value}`)
                        }
                 }
            
             
         }
       
        } 
        

  }
   printValuesIteratively(body)
   

   //Part 1 Q2. returning an array of names for the given tree node;
   let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   };

    
    // Recursively
    
     function nameArray(node){
        let nameCollection=[];
            nameCollection.push(`${node.name} :${node.value}`)
           if(node.children==null){
              return nameCollection;
            
            }
              else{ 
                 
                  for (let element of node.children) {
                   
                 let newVal= nameArray(element);
                 nameCollection=nameCollection.concat(newVal)
                  }
              
            }
            return nameCollection;

         }
    console.log(nameArray(node1));
    //Iteratively

      function arrayOfNameAndValues(node){
          let collectionArray=[];
            collectionArray.push(`${node.name} :${node.value}`);
             if(node.children!==null){
                      for(let item of node.children){
                        collectionArray.push(`${item.name} :${item.value}`);
                        if(item.children!==null){
                          for(let ele of item.children){
                            collectionArray.push(`${ele.name} :${ele.value}`)
                          }}
                        
                   
             }
        

      }
      return collectionArray;
    }
     console.log(arrayOfNameAndValues(node1))


    
    
    