var port = process.env.PORT || 3000;
var io = require('socket.io').listen(+port);

var generateHex = function() {
    return (Math.random() + 1).toString(16).substring(5);
}

var generateLog = function() {
    var now = new Date();
    var entry = now.toLocaleTimeString() + ' ' + generateHex();
    return entry;
}

io.sockets.on('connection', function(socket){
    setInterval(function(){
        var entry = generateLog();
        socket.emit('log', entry);

        if (Math.floor(Math.random() * 20) == 0)
            socket.emit('reload', {APP_ID:generateHex()});
    }, 500);
    socket.on('my other event', function(data){
        console.log(data);
    })
});