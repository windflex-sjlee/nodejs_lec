console.log('TEST 001');  // test message

var http = require('http');

http.createServer( function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1> Hello World .. ! </h1>');
}).listen(3000, function() {
    console.log('Server running at localhost');
} );
