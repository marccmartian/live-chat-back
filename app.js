require("dotenv").config();

const Server = require("./models/server");

global.onlineUsers = new Map();

const server = new Server();

server.listen();
