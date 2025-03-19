// edit by sublime-sftp-plugin

const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\nBye~\n");
};

var www = http.createServer(handler);
www.listen(28080); // in ch2, we use port 28080

