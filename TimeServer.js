var net = require("net");

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

var server = net.createServer(function(socket) {
    //YYYY-MM-DD hh:mm
    var date = new Date();
    var now = "";
    now += date.getFullYear().toString();
    now += "-";
    now += zeroPad(date.getMonth()+1,2).toString();
    now += "-";
    now += zeroPad(date.getDate(),2).toString();
    now += " ";
    now += zeroPad(date.getHours(),2).toString();
    now += ":";
    now += zeroPad(date.getMinutes(),2).toString();
    //console.log(now);
    socket.write(now);
    socket.end("\n");
})
server.listen(process.argv[2]);

