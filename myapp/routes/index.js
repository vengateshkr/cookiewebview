

var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.render('index.html');
});
module.exports = router;
