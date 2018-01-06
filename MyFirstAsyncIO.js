var fs = require('fs');

function readIt() {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        var split = fileContents.toString().split('\n');
        var count = split.length - 1;
        console.log(count);
    });
}

readIt();