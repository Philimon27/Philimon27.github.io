
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
    body.descendents.push(div); 
    div.descendents.push(label, input, p);
    
  //Part 1 Using Recursiove function
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

 //Using iteration
   function printValuesIteratively(trees){
         while(trees.value!=null){
             console.log(trees.value)
             for(const  tree of trees.descendents){
                console.log(`name: ${tree.value}`)
             }
             trees=trees.descendents;
             
         }
         //console.log(trees.value)
         
        

   }
   printValuesIteratively(body)


    
    
    