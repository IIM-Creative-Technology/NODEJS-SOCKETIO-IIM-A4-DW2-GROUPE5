const express = require('express')
const Socket = require('./socket/index')
const {createServer} = require("http");
const {Server} = require('socket.io');
const { sequelizeInstance } = require('./utils/database');
const { getAll, getOne, createOne, updateOne, deleteOne } = require('./controllers/users');
const { User } = require('./models/users'); 
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer)
const port = process.env.PORT || 3000

// const httpServer = createServer(index);
// const io = new Server(httpServer)

app.use('/', router);


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





