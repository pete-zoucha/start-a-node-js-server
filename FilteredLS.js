var fs = require("fs");
var path = require("path");
var i = undefined;

function getFiles() {
    fs.readdir(process.argv[2], function(err, dirContents) {
        for (i = 0; i < dirContents.length; i++) {
            if (path.extname(dirContents[i]) === '.'+process.argv[3]) {
                console.log(dirContents[i]);
            }
        }
    });
}

getFiles();