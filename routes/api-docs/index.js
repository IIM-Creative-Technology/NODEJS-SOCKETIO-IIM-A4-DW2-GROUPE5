const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NodeJS - SocketIO - Groupe 5',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'https://nodejs-socketio-grp5.herokuapp.com/',
        description: 'Production',
      },
      { url: 'http://localhost:3000', description: 'Development' },
    ],
  },
  apis: [
    './routes/**/*.js',
    // add here other files (from the project root)
  ],
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = {
  docsRouter: [swaggerUi.serve, swaggerUi.setup(openapiSpecification)],
};
