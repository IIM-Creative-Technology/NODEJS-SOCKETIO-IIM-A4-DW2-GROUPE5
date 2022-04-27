const express = require('express')
const Api = require("./api/index")
const Socket = require('./socket/index')
const {createServer} = require("http");
const {Server} = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer)
const port = process.env.PORT || 3000

io.on('connection', (socket) => {
    console.log(`Connecté au client ${socket.id}`)
})

app.use('/api', Api.router);
app.use('/socket', Socket.socket);

httpServer.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`);
});

