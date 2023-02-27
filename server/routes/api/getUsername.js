const Controller = require("../../controllers");

async function getUsername(req, res) {
    try {
        const userId = req.body.userId;
        console.log(userId);
        const username = await Controller.getUsername(userId);
        res.json(username);
    } catch (error) {
        res.json(error);
    }
}
module.exports = getUsername;