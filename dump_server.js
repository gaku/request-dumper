// Because request.rawHeaders is only available with v0.12
var http = require('http');
var server = http.createServer(function(request, response) {
  console.log('------------------')
  for (var i = 0; i + 1 < request.rawHeaders.length; i += 2) {
    console.log(request.rawHeaders[i] + ": " + request.rawHeaders[i+1]);
  }
  console.log('- end of headers -----------------');

  request.on('data', function(chunk) {
    console.log(chunk.toString());
  });

  request.on('end', function() {
    console.log('- end of body -----------------');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Request received\n");
  });
});
server.listen(8000);
