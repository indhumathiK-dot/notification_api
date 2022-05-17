import express from "express";
import { databaseConnection } from "./utils/dbConn";
import RoutePaths from "./Controllers/index";
import { socketService } from "./Services/socket.service";

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});
const PORT = 5000;

app.use(express.json());
app.use(RoutePaths);

databaseConnection();

http.listen(PORT, () => {
  console.log(`Server is listening on the PORT ${PORT}`);
});

io.on("connection", (socket: any) => {
  socketService(socket);
});
