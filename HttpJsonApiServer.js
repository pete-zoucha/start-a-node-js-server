var http = require("http");
var map = require("through2-map");
var url = require("url");
var port = process.argv[2];

var server = http.createServer(function (request, response) {
    //console.log(request.url);
    var urlInfo = url.parse(request.url);
    console.log(Date(urlInfo.query));
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if (urlInfo.pathname === '/api/parsetime') {
        
    }
    if (urlInfo.pathname === '/api/unixtime') {
        
    }
    response.write(resObj, function() {
        response.end();
    });
});

server.listen(port);