const swaggerJsdoc = require("swagger-jsdoc");
const docs = require("./docs");

const definition = {
  openapi: "3.0.0",
  info: {
    title: "URL Shortener API",
    version: "1.0.0",
    description: "A simple API for shortening URLs",
  },
  servers: [
    {
      url: "https://link-shortened-be-a8615336383d.herokuapp.com/",
    },
  ],
  tags: [
    {
      name: "URL Shortening",
      description: "Operations related to URL shortening",
    },
  ],
};

const swaggerOptions = {
  definition,
  apis: [], // Assuming your routes are in a routes folder
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

swaggerSpecs.paths = docs;

module.exports = swaggerSpecs;
