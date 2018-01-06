var http = require("http");
var res = [[process.argv[2],""],[process.argv[3],""],[process.argv[4],""]]
var counter = 3;

function getStrings(url) {
    var content = "";
    http.get(url, function(response) {
        response.setEncoding("utf8");
        response.on("data", function(data){
            content += data;
        });
        response.on("end", function() {
            for (i=0;i<res.length;i++) {
                if (url === res[i][0]) {
                    res[i][1] = content;
                }
            }
            counter -= 1;
            if(counter === 0) {
                logThings();
            }
        });
    });
}

function logThings() {
    console.log(res[0][1]);
    console.log(res[1][1]);
    console.log(res[2][1]);
}

getStrings(res[0][0]);
getStrings(res[1][0]);
getStrings(res[2][0]);