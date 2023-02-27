const Controller = require("../../controllers");

async function getProfileImageByUserId(req,res) {
    try {
        const userId = req.body.userId;
        const profileImage = await Controller.getProfilePic(userId);
        res.json(profileImage);
    } catch (error) {
        res.json(error);
    }
}

module.exports = getProfileImageByUserId;