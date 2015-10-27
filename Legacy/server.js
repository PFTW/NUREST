var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listKeynotes', function (req, res) {
   fs.readFile( __dirname + "/" + "keynotes.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("listKeynotes app, host, port)

})


//keynotes.json = restful db 
//addKeynote - 
