const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require("cors");

const usersRouter = require("./routes/Users/usersRouter");

const server = express();
server.name = "";

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/user", usersRouter);

server.use("/", routes);

module.exports = server;
