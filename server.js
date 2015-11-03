var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Basic HTTP Version - NU CONF 395\n');
}).listen(port);




//var express = require('express');
//var app = express();
//var fs = require("fs");

//app.get('/listKeynotes', function (req, res) {
//   fs.readFile( __dirname + "/" + "keynotes.json", 'utf8', function (err, data) {
//       console.log( data );
 //      res.end( data );
 //  });
//})

// app.listen(3000);
// console.log("Listening to PORT 3000");


//keynotes.json = restful db