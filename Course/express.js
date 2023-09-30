const express = require('express')
const app = express()




app.use(express.urlencoded({ extended: false }));


app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index',{title:'Home'})
})
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('Post methode')
})
app.use(auth)




app.get('/about',(req,res)=>{
    console.log('about');
    res.render('about',{title:'about'})
})

app.get('/contact',vari,(req,res)=>{
    const details=[
        {name:'Akhil',age:22},
        {name:'Manu',age:12},
        {name:'Anu',age:10}
    ]
    console.log('contact');
    res.render('contact',{title:'contact'})
})

app.use((req,res)=>{
    res.status(400).render('404')
})

function auth(req,res,next){
    console.log('Authentication');
    next()
}
function vari(req,res,next){
    console.log('varification');
    next()
}

app.listen(4005,()=>{
    console.log('Server created at 4005');
})