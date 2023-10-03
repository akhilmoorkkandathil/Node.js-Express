var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {name:'IPhone 12',
    category:'Mobile',
    description:'This is a good phone',
    img:'https://rukminim2.flixcart.com/image/224/224/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=90'},
    {name:'IPhone 12',
    category:'Mobile',
    description:'This is a good phone',
    img:'https://rukminim2.flixcart.com/image/224/224/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=90'},
     {name:'IPhone 12',
     category:'Mobile',
     description:'This is a good phone',
     img:'https://rukminim2.flixcart.com/image/224/224/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=90'},
     {name:'IPhone 12',
     category:'Mobile',
     description:'This is a good phone',
     img:'https://rukminim2.flixcart.com/image/224/224/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=90'}]
  
  res.render('index', {products,admin:false});
});

module.exports = router;
