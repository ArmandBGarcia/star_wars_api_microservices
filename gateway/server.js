const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);

app.use(
  "/database",
  createProxyMiddleware({
    target: "http://database:8004",
    changeOrigin: true,
  })
);

const PORT = 8000;

app.listen(PORT, console.log(`server listening on port: ${PORT}`));
