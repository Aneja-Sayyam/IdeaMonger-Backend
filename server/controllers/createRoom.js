const Room = require("../models").Room;

function createRoom(users){
    return new Promise(async (resolve,reject)=>{
        try{
            const createdRoom = await Room.create(users);
            resolve(createdRoom); 
        }catch(error){
            reject(error);
        }
    })
}

module.exports = createRoom;