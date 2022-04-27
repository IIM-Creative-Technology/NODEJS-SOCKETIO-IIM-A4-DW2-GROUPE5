const express = require('express')
const index = require('./routes/routes')
// const Socket = require('./socket/index')
// const {createServer} = require("http")
// const {Server} = require('socket.io')

const app = express()
const port = process.env.PORT || 3000
// const httpServer = createServer(index);
// const io = new Server(httpServer)

// io.on('connection', (socket) => {
//     console.log(`Connecté au client ${socket.id}`)
// })

// index.use('/api', Api.router
//     // Insert here the sub route (.use like above)
// ).use('/socket', Socket.socket)

// index.post('/test', (req, res) => {
//     res.send('U just posted')
// })

app.use('/', index)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

