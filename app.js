var port = process.env.PORT || 3000;
var io = require('socket.io').listen(+port);

io.sockets.on('connection', function(socket){
    io.sockets.emit('news', { hello: 'world'});
    socket.on('my other event', function(data){
        console.log(data);
    })
});