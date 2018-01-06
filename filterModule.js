var fs = require("fs");
var path = require("path");

module.exports = function (dirName, extString, callback) {
    fs.readdir(dirName, function(err, dirContents) {
        if (err) {
            return callback(err);
        }
        var filteredContents = [];
        var i = undefined;
        for (i = 0; i < dirContents.length; i++) {
            if (path.extname(dirContents[i]) === '.'+extString) {
                filteredContents.push(dirContents[i]);
            }
        }
        callback(null, filteredContents);
    });
}