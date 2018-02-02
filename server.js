const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Port the server will run on
const port = 3000;

const app = express();

// The server Instance
const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', socket => {
    // put your socket events in here.
    console.log(socket);

    socket.on('disconnect', () => {
        console.log("IT'S OVER ANAKIN!")
    })
});

server.listen(port, () => {
    console.log(`Server now listening on port ${port}`);
});