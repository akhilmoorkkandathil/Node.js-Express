var http=require('http')
var fs=require('fs')
var url=require('url')
const { error } = require('console')

http.createServer(function(req,res){
    var q=url.parse(req.url,true)
    if(q.pathname==='/'){
        fs.readFile('sample.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
      }else if(q.pathname==='/signupaction'){
    console.log(q.query)
    fs.readFile('home.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>Succefully Signes In</h2>')
        res.end()
    })
    
  }else{
    fs.readFile('error.html',function(err,data){
        res.writeHead(400,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
  }
}).listen(8000,()=>console.log('RUNNING'))

