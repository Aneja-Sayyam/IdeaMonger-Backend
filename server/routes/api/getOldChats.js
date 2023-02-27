const Controller = require("../../controllers");
const { formatMessage} = require("../../../utils/messages");

async function getOldChats(req, res) {
    try {
        const roomId = req.body.roomId;
        const chats = await Controller.getAllMessagesByRoomId(roomId);
        const formattedMessages = []; chats.map(message => {
            formattedMessages.push(formatMessage(message.fromUser, message.content, message.roomId, message.id));
        })
        res.json(formattedMessages);
    } catch (error) {
        res.json(error)
    }
};

module.exports = getOldChats;