var http = require('http'),
    https = require('https');
var body = ''
var server = http.createServer(function(req, res) {
    req.on('error', (err) => {
        console.error(err);
    })
  req.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)
  })
  req.on('end', function() {
    console.log('Body: ' + body)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('post received')
  })
}).listen(8080 || process.env.PORT);
