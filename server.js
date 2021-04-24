var webSocketServer = require('ws').Server;

var wss = new webSocketServer({
    port:9090
});

wss.on('connection', function(conn){
    console.log("User connected");

    conn.on('message', function(message){

    })

    conn.on('close', function(){
        console.log('connection closed');
    })

})

function sendToOtherUser(connection, message){
    connection.send(JSON.stringify(message))
}