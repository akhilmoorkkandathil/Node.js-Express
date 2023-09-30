const express=require('express')
const app = express()

//app.use(logger)
app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/login',Auth,(req,res)=>{
    res.send('Login page')
})


function logger(req,res,next){
    console.log('--Log Middleware--');
    next()
}
function Auth(req,res,next){
    if(req.query.admin==='true'){
        next()
    }else{
        res.send('Invalid')
    }
    
}


app.listen(7500)