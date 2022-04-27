const express = require('express')
const index = express()
const Api = require("./api/index")
const Socket = require('./socket/index')
const {createServer} = require("http");
const {Server} = require('socket.io')
const httpServer = createServer(index);
const io = new Server(httpServer)
const port = process.env.PORT || 3000

io.on('connection', (socket) => {
    console.log(`Connecté au client ${socket.id}`)
})

index.use('/api', Api.router
    // Insert here the sub route (.use like above)
).use('/socket', Socket.socket)

httpServer.listen(port)

