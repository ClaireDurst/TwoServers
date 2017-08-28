var http = require("http");

var PORTONE = 7000;

var PORTTWO = 7500;

function handleRequestONE(request, response) {

  response.end("You're a Javascript mastermind!");
}

function handleRequestTWO(request, response) {

  response.end("You smell!");
}

var serverONE = http.createServer(handleRequestONE);
var serverTWO = http.createServer(handleRequestTWO);

serverONE.listen(PORTONE, function() {

  console.log("Server listening on: http://localhost:%s", PORTONE);

});

serverTWO.listen(PORTTWO, function() {

  console.log("Server listening on: http://localhost:%s", PORTTWO);

});
