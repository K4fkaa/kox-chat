// Websocket
const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();
server.listen(process.env.PORT || 4000);
const connectionList = [];
const wsServer = new WebSocketServer({
    httpServer: server,
});

const sendMessageToEveryone = (message) => {
    connectionList.forEach((connection) => {
        connection.sendUTF(message);
    });
};

wsServer.on('request', (request) => {
    const connection = request.accept(null, request.origin);
    connectionList.push(connection);

    connection.on('message', (message) => {
        console.log('Received Message:', message.utf8Data);
        sendMessageToEveryone(message.utf8Data);
    });

    connection.on('close', (reasonCode, description) => {
        connectionList.filter((item) => item !== connection);

        console.log('Client has disconnected.');
    });
});
