var http = require("http");

var PORTOne = 7000;
var PORTTwo = 7500;

var handleRequestGood = function (req, res) {
  res.end("This is a good phrase " + req.url);
}
var handleRequestBad = function (req, res) {
  res.end("This is a bad phrase " + req.url);
}
var serverGood = http.createServer(handleRequestGood);
var serverBad = http.createServer(handleRequestBad);

serverGood.listen(PORTOne, function() {
  console.log("Server is listening at http://localhost:%s", PORTOne);
});

serverBad.listen(PORTTwo, function() {
  console.log("Server is listening at http://localhost:%s", PORTTwo);
});