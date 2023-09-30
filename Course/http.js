const http = require('http')

const server =http.createServer((req,res)=>{
    if(req.url===('/about')){
        res.end('This is about page')
        
    }
    if(req.url===('/')){
        res.end('This is home page')
        
    }
    
    else res.end(
        `<h1>Opps!</h1>
        <p>some errors happened</p>
        <link href = '/'>Back to home</link>`
    )
    
})

server.listen(4002)

