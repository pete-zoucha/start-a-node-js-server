var mymodule = require("./filterModule.js");
var callback = (err, data) => err ? console.log("There was an error.") : logData(data);

function logData(data) {
    for (i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

mymodule(process.argv[2], process.argv[3], callback);