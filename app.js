const express = require('express')
const app = express()
const Api = require("./api/index")
const Socket = require('./socket/index')
const {createServer} = require("http");
const {Server} = require('socket.io')
const httpServer = createServer(app);
const io = new Server(httpServer)

io.on('connection', (socket) => {
    console.log(`Connecté au client ${socket.id}`)
})

app.use('/api', Api.router
    // Insert here the sub route (.use like above)
).use('/socket', Socket.socket)

httpServer.listen(3000)

