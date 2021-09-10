const http = require('http'),
    https = require('https');
var body = ''
http.createServer(function(req, res) {
    console.log("server created");
    req.on('error', (err) => {
        console.error(err);
    })
  req.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)
  }).on('end', function() {
    console.log('Body: ' + body)
    res.end(body);
  })
}).listen(8080 || process.env.PORT);
