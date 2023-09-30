const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req,res)=>{
    const parsed = url.parse(req.url)
    fs.readFile('.'+parsed.basename,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-type':'text/html'})
            return res.end('page not found')
        }
        res.writeHead(400,{'Content-type':'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(4003)