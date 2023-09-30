
const http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello')
    res.end()
    
}).listen(4004,()=>{
    console.log('server running at 4004')
})
