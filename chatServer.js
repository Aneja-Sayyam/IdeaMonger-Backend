const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 5000 || process.env.PORT;
const socketio = require("socket.io");
const path = require("path");
const io = socketio(server);
// const opn = require("opn");
const {formatMessage,date} = require('./utils/messages');

// Set static folder
app.use(express.static(path.join(__dirname,'/client/public/chat/')));


// Run when client connects
io.on("connection",socket =>{
    // console.log("New WS Connection...");
    socket.emit("date", date());
    // socket.emit("message",'Welcome');
    socket.on("chatMessage" ,(message,username)=>{
        io.emit('message', formatMessage(username, message));
        // console.log(message,username);
    })
    // socket.on("disconnect", ()=>{
    //     console.log("User DIS");
    //     io.emit("message", "User Left");
    // })
});
server.listen(port,()=>{
    console.log(`Server listening at port ${port}.`);
    // opn("http://localhost:3000/");
})
