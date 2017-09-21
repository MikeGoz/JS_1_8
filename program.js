// task 1.8

var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  
  if (request.method === 'GET' && request.url === '/test') {
    fs.readFile('./index.html', 'utf-8', function(err, data){
      response.write(data);
      response.end();
    });  
  } else {
    response.statusCode = 404;
    fs.readFile('img/error.jpg', function(err, data) {
      response.writeHead(200, {'Content-Type' : 'image/jpg'});
      response.end(data);
    });  
  }    
});   
server.listen(8080);