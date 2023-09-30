const express=require('express')
const path = require('path')

const app = express()

app.use((req,res,next)=>{
    console.log('Start')
    next()
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname, 'sample.html'));
    console.log('Middle')
})
app.use((req,res)=>{
    console.log('End')
})
app.post('/signupaction',(req,res)=>{
    res.send('Home page');
})
app.get('/about',(req,res)=>res.send('About Page'))

app.listen(3000,()=>{
    console.log(__filename)
    console.log('Server started at: ', 3000)
})