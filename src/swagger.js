const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library Management API',
      version: '1.0.0',
    },
    components: {
      schemas: {
        Book: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
            },
            author: {
              type: 'string',
            },
            genre: {
              type: 'string',
            },
            available: {
              type: 'boolean',
            },
          },
        },
        User: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
            role: {
              type: 'string',
              enum: ['user', 'admin'],
            },
          },
        },
        Loan: {
          type: 'object',
          properties: {
            book: {
              type: 'string',
            },
            user: {
              type: 'string',
            },
            borrowDate: {
              type: 'string',
              format: 'date-time',
            },
            returnDate: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
