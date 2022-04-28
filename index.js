const express = require('express')
const Api = require("./api/index")
const Socket = require('./socket/index')
const {createServer} = require("http");
const {Server} = require('socket.io');
const { sequelizeInstance } = require('./utils/database');
const { getAll, getOne, createOne, updateOne, deleteOne } = require('./controllers/users');
const { User } = require('./models/users'); 
const bodyParser = require('body-parser');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer)
const port = process.env.PORT || 3000

io.on('connection', (socket) => {
    console.log(`Connecté au client ${socket.id}`)
})

app.use('/api', Api.router);
app.use('/socket', Socket.socket);

app.use(bodyParser.json());

const startServer = async () => {
    try {
        await sequelizeInstance.authenticate();
        console.log('Connection with database has been established successfully.');
        httpServer.listen(port, () => {
            console.log(`Server listen on http://localhost:${port}`);
        });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

startServer();

app.get('/users', getAll);
app.get('/users/:id', getOne);
app.post('/users', createOne);
app.put('/users/:id', updateOne);
app.delete('/users/:id', deleteOne);





