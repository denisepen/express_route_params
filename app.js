var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Home Page")
})

app.get('/speak/:animal', function(req, res){
  var anim = req.params.animal
  console.log(anim);
  if (anim === "pig"){
    res.send("The " + anim + " says 'Oink'")
  } else if (anim === "cow"){
    res.send("The "+ anim+ " says 'Moo'")
  } else if (anim === "dog"){
    res.send("The " + anim + " says 'Woof Woof!''")
  } else {
    res.send("What sound does this animal make?")
  }
})

app.get('/repeat/:saying/:times', function(req, res){
  console.log(parseInt(req.params.times))
  var say = req.params.saying;
  var times = parseInt(req.params.times);
  var message = "";

  for (var i =0; i < parseInt(times); i++){
    message += say + " "
  }

    res.send(message)
})

app.get('/*', function(rea, res){
  res.send("This page is not available")
})




app.listen(3001, function(){
  console.log("Running on Port 3001...");
})
