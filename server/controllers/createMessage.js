const Message = require("../models").Message;

function createMessage(newMessage){
    return new Promise(async (resolve,reject)=>{
        try{
            const createdMessage = await Message.create(newMessage);
            resolve(createdMessage);
        }catch(error){
            reject(error);
        }
    });
}

module.exports = createMessage;