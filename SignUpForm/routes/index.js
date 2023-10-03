var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  console.log(req.body);
  MongoClient.connect('mongodb://localhost:27017/Deails', function(err, client) {
    if (err){
      console.log( err);
    }else{
      client.db('Form').collection('Details').insertone(req.body)
    }
  })

   res.send('Submitted')
})
module.exports = router;
