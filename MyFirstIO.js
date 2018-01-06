var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]).toString();
var split = buffer.split('\n');
var count = split.length - 1;

console.log(count);