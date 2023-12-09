const http = require('http');
const os = require('os');

console.log("External app starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Hi, i'm an external app, you've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

