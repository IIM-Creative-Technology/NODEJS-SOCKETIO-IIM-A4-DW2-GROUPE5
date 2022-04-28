const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const cors = require('cors');
const bodyParser = require('body-parser');
const {sequelizeInstance} = require('./utils/database');

const router = require('./routes/router');
const messenger = require('./socket/index');

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());

// Routing
app.use('/', router)
    .use('/m', messenger);


// Socket.io connection
io.on('connection', (socket) => {
  console.log(`Connected client :`, socket.id);
  io.emit('socketId', socket.id);

  socket.on('chatMessage', (data) => {
    console.log(`Message received by :`, data.id);
    io.emit('chatMessage', {
      'message': data.content,
      'color': data.color,
    });
  });
});

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

const startServer = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log('Connection with database has been established successfully.');
    server.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
