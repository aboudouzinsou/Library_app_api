const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library Management API',
      version: '1.0.0',
      description: 'API for managing a library, including user authentication, book management, and loan tracking.',
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
            copies: {
              type: 'number',
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
            points: {
              type: 'number',
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
            status: {
              type: 'string',
              enum: ['borrowed', 'returned', 'overdue'],
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
