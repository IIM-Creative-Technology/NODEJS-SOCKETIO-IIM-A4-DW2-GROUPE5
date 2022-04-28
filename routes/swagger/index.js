const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NodeJS - SocketIO - Groupe 5 > Nouilles',
      version: '1.0.0',
    },
    servers: [
      {url: 'http://localhost:3000', description: 'Development'},
      {url: 'https://iim-groupe-5.vercel.app/', description: 'Production'},
    ],
  },
  apis: ['../**/*.handler.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = {
  docsRouter: [swaggerUi.serve, swaggerUi.setup(openapiSpecification)],
};
