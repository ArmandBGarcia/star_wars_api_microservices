const express = require("express");
const morgan = require("morgan");
const { ClientError } = require("./utils/errors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));

//manjador de errores para ruta invalida
server.use("*", (req, res) => {
  res.status(404).send("Not found");
  // ClientError(404);
});

//manejador de errores de express
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
