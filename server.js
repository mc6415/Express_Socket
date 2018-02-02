const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const controllers = require('./Controllers');

// Port the server will run on
const port = 3000;

const app = express();

// The server Instance
const server = http.createServer(app);
const io = socketIO(server);

// Put your mongo database settings here
const dbOptions = {
    host: 'localhost',
    port: '27017',
    dbName: 'testProject'
};

// Now we connect using the settings above.
mongoose.connect(`mongodb://${dbOptions.host}:${dbOptions.port}/${dbOptions.dbName}`);

server.listen(port, () => {
    console.log(`Server now listening on port ${port}`);
});

io.on('connection', socket => {
    // put your socket events in here.
    console.log(socket);

    socket.on('disconnect', () => {
        console.log("IT'S OVER ANAKIN!")
    })
});
