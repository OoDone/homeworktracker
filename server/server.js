var http = require('http'),
    https = require('https');
var body = ''
var server = http.createServer(function(req, res) {
  request.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)
  })
  request.on('end', function() {
    console.log('Body: ' + body)
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('post received')
  })
});
