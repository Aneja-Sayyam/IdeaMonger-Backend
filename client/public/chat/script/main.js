const socket = io();
const userId = window.sessionStorage.getItem("userId");
const messageInput = document.getElementById("messageInput");
const send = document.getElementById("send");
const chatArea = document.querySelector(".chat-area");
const searchInput = document.getElementById("searchUser");
const submitBtn = document.getElementById("submitBtn"); 
console.log(userId);
const url = new URL("http://localhost:3000/client/public/chat/index.html");
let roomId;
let users;
let oldRoomId;
submitBtn.addEventListener("click",()=>{
    // console.log(searchInput.value);
    if (searchInput.value !== ""){
        clearChatScreen();
        console.log(getUsers());
        socket.emit("connectRoom",getUsers());
        searchInput.value = '';

    }else{
        console.log("write something!");
    }
});
// socket.emit("connectRoom",users);

socket.on("getRoom", room=>{
    roomId = room;
    console.log(roomId);
    socket.emit("oldChat");
})

// socket.on("date",(date)=>{
//     const datestamp = document.querySelector(".datestamp");
//     datestamp.innerHTML = date;
// })

socket.on("message", (message)=>{
    console.log(message);
    if (userId === message.fromUser){
        outputMessage(message,'self');
    }else{
        // console.log(message.username);
        outputMessage(message);
    }
    chatArea.scrollTop = chatArea.scrollHeight;
})

function outputMessage(message,user="friend"){
    const div = document.createElement('div');
    div.classList.add('message-box');
    if(user === 'self'){
        div.classList.add('right');
    }
    div.innerHTML = `<div class="message">${message.text}<div class="time">${message.time}</div></div>`;
    document.querySelector(".chat-area").appendChild(div);
}
function clearChatScreen(){
    document.querySelector(".chat-area").innerHTML = ''
}
messageInput.addEventListener("keypress",(e)=>{
    if (e.key === 'Enter'){
        sendMessage();
    }
});

send.addEventListener('click', sendMessage());

function sendMessage(){
    const message = messageInput.value;
    if (message !== ''){
        const messageData = {
            "fromUser" : userId,
            // "roomId" : roomId,
            "content" : message
        };
        socket.emit('chatMessage', messageData);
        // console.log(message)
        messageInput.value = '';
        messageInput.focus();
    }
}
function getUsers(){
    return users = {
        userA : userId,
        userB : searchInput.value
    };
}