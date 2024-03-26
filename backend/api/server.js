const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const morgan = require('morgan');

const StudentsRouter = require('../api/users/users-router');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Global Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routers
app.use("/users", StudentsRouter);

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

// Global Error Middleware
app.use((err, req, res, next) => {
    // eslint-disable-line
    res
        .status(err.status || 500)
        .json({ message: err.message || "SERVER ERROR!...." });
});

module.exports = server;
