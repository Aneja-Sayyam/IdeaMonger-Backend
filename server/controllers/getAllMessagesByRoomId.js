const Message = require("../models").Message;

function getAllMessagesByRoomId(roomId){
    return new Promise(async(resolve,reject)=>{
        try{
            const messages = await Message.findAll({where : {roomId : roomId}});
            resolve(messages);
        }catch(error){
            reject(error);
        }
    })
}

module.exports = getAllMessagesByRoomId;