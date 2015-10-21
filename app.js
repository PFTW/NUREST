var express = require("express");
var app = module.exports = express.createServer

var keynotes = [
  { title: 'Anti-Trust Law in the Face of Larger Mergers' },
  { title: 'Forex Trading and Global firms' },
  { title: 'FASB Regulation and Manufacturer Leasing' },
  { title: 'Modern Workplace and Employee Retention' },
  { title: 'Patent Law in Current Software Arena' },
  { title: 'Real Estate Law and REIT finance' }
];
// Set up a URL route
app.get("/", function(req, res) {
 res.send("Legal Keynote sessions 2015");
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);