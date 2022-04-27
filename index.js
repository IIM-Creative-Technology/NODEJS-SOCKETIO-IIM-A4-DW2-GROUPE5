const express = require('express')
const app = express()
const index = require('./routes/index')
// const Socket = require('./socket/index')
// const {createServer} = require("http")
// const {Server} = require('socket.io')
// const httpServer = createServer(index);
// const io = new Server(httpServer)
const port = process.env.PORT || 3000

app.use('/', index)

// io.on('connection', (socket) => {
//     console.log(`Connecté au client ${socket.id}`)
// })

// index.use('/api', Api.router
//     // Insert here the sub route (.use like above)
// ).use('/socket', Socket.socket)

// index.post('/test', (req, res) => {
//     res.send('U just posted')
// })

app.listen(port, () => {
    console.log('Oui, j\'écoute...')
})

