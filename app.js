const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');
const app = express();

app.set('view engine','ejs');




// get handler //
  app.get('/',function(req, res) {  
    res.render('drink',pageInfo.drink);
  });
  
  app.get('/water',function(req, res) {  
    res.render('water',pageInfo.water);
  });
  
  app.get('/coffee',function(req, res) {  
    res.render('coffee',pageInfo.coffee);
  });
  
  app.get('/tea',function(req, res) {  
    res.render('tea',pageInfo.tea);
  });
  

  //css styling // 
  app.use(express.static(path.join(__dirname, 'public')));
  

  //error page setup// 
  app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
  });
  

  //local:hose:3000// 
  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
  });