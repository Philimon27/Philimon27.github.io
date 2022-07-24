const fs = require('fs');
const { dirname } = require('path');
const path=require('path')
const http= require('http').createServer((req,res)=>{
    
   
    if(req.url==='/'&& req.method==='GET'){
       fs.createReadStream(path.join(__dirname, 'submitForm.html')).pipe(res)
    }
    else if(req.url==='/submit' && req.method=='POST'){
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const str = Buffer.concat(body).toString();
            console.log(str);
            fs.writeFile('users.txt', str, (err) => {
                if (!err) {
                  
                    res.end(`<body>
                              Save succesfully
                             <a href ='/'> homepage</a>
                             </body>`);

                } else {
                    res.end('Try again ');
                }
            })
        });
    } else {
        res.end('others....');
    }

    
}).listen(3000);