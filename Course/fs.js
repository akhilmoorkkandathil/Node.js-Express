const fs = require('fs')

fs.writeFile('./data.txt','Hello added',(e)=>{
    if(e){
        console.log(e);
    }
})
fs.appendFile('data.txt',' Hello appended',(e)=>{
    if(e){
        console.log(e);
    }
})


fs.writeFile('data.txt','Hello added',(e)=>{
    if(e){
        console.log(e);
    }
})

fs.readFile('data.txt','utf-8',(err,data)=>{
    
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})

fs.unlink('data.txt',(e)=>{
    if(e){
        console.log(e);
    }
})