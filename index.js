const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const port = process.env.PORT || 3000

const router = require('./routes/router')
const messenger = require('./socket/index')

//Routing
app.use('/', router)
    .use('/m', messenger)

//Socket.io connection
io.on('connection', (socket) => {
    console.log(`Connected client`)

    socket.on('chatMessage', (message) => {       
        console.log(`Message received`)
        io.emit('chatMessage', message);
    })
})

server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})