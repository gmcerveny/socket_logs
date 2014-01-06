var port = process.env.PORT || 3000;
var io = require('socket.io').listen(+port);

io.sockets.on('connection', function(socket){
    setInterval(function(){
        var now = new Date();
        var hex = (Math.random() + 1).toString(16).substring(5);
        var entry = now.toLocaleTimeString() + ' ' + hex;
        io.sockets.emit('log', entry);
    }, 500);
    socket.on('my other event', function(data){
        console.log(data);
    })
});