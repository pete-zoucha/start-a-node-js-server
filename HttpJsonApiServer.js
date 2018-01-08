var http = require("http");
var map = require("through2-map");
var url = require("url");
var port = process.argv[2];

var server = http.createServer(function (request, response) {
    //console.log(request.url);
    var urlInfo = url.parse(request.url);
    //console.log(Date.parse(urlInfo.query.replace("iso=","")));
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var resObj = undefined;
    if (urlInfo.pathname === '/api/parsetime') {
        var date = new Date(Date.parse(urlInfo.query.replace("iso=","")));
        resObj = { 
                    "hour": date.getHours(), 
                    "minute": date.getMinutes(), 
                    "second": date.getSeconds() 
                };
    }
    if (urlInfo.pathname === '/api/unixtime') {
        resObj = { "unixtime": Date.parse(urlInfo.query.replace("iso=","")) };
    }
    response.write(JSON.stringify(resObj),"UTF-8",function() {
        response.end();
    });
});

server.listen(port);