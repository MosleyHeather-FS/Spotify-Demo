const http = require('http');

/* Create an HTTP server to handle responses */

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
  })
  .listen(6000);