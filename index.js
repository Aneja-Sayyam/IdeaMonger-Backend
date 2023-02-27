const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const http = require("http");
// const path = require("path");

const models = require("./server/models");
const app = express();
const cors = require('cors');
const port = process.env.PORT || "3000";
// const chatServer = require("./chatServer");
const socketio = require("socket.io");
const {formatMessage,date} = require('./utils/messages');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname));
// app.use(chatServer.);
app.use("/", require("./server/routes"));

const server = http.Server(app);
const io = socketio(server);
const Controller = require("./server/controllers");
// app.use(express.static(path.join(__dirname,'/client/public/chat/')));

// Run when client connects
io.on("connection",(socket) =>{
  console.log("New WS Connection...");
  // const query = socket.handshake.query;
  // const users = JSON.parse(query.users);
  // console.log(users);
  
  // console.log(roomId);
  let room;
  socket.on("connectRoom", async (users) => {
    console.log("connecting -> ",users)
    room = await Controller.findRoomByUsers(users);
    if (room === "Not Found"){
      room = await Controller.createRoom(users);
      console.log("Created RoomId -> ", room.get().id);
      // roomId = createdRoom.dataValues.id;
    }
    const roomId = room.get().id;
    console.log('roomid',roomId);
    // roomId = roomId.id;
    socket.join(roomId);
    // console.log(socket);
    socket.emit("getRoom",roomId);
  })
  // socket.on("oldChat",async(roomId)=>{
  //   // console.log(roomId);
  //   const messages = await Controller.getAllMessagesByRoomId(roomId);
  //   // console.log(messages);
  //   messages.forEach(message => {
  //     // console.log(message);
  //     // console.log(message.content,message.fromUser);
  //     const formatedMessage = formatMessage(message.fromUser,message.content,message.roomId,message.id);
  //     io.to(roomId).emit('message', formatedMessage);
  //   });
  // })

  // socket.to(roomId).emit("getRoom",roomId);
  // socket.emit("date", date());
  // socket.emit("message",'Welcome');
  socket.on("chatMessage", async (messageData) => {
    console.log(messageData);
    
    try {
      const createdMessage = await Controller.createMessage(messageData);
      const formattedMessage = formatMessage(createdMessage.fromUser, createdMessage.content, createdMessage.roomId, createdMessage.id);
      // console.log(io.sockets.adapter);
      io.to(createdMessage.roomId).emit("message", formattedMessage);
      // console.log(roomId.id,`  ${messageData.content}`);
    } catch (error) {
      console.log(error);
    }
    // console.log(message,username);
  });
  
});
models.sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  });
});