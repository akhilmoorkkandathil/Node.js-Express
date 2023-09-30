const http = require('http')



const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/plain')
    res.write('Hello Akhil')
    res.end()
})
server.listen(4004,'localhost',()=>{
    console.log('server is running at 4004');
})