const express = require("express");
const cors = require("cors");
const { dataBaseConnection } = require("../database/config");
const { socketController } = require("../controller/sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server, {
      cors: { origin: process.env.FRONT_URL, credentials: true },
    });
    this.usersPath = "/api/users";
    this.authPath = "/api/auth";
    this.messagesPath = "/api/messages";

    this.connectDatabase();
    this.middlewares();
    this.routes();

    this.sockets();
  }

  async connectDatabase() {
    await dataBaseConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users"));
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.messagesPath, require("../routes/messages"));
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server runnig in port ${this.port}`);
    });
  }
}

module.exports = Server;
