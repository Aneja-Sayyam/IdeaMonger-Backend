const Controller = require("../../controllers");

async function unfollowUser(req, res) {
    try {
        const data = {
            userId: req.body.follower,
            followingId: req.body.following,
        };
        console.log(data);
        await Controller.unfollow(data);
        res.json("unfollowed");
    } catch (error) {
        res.json(error);
    }
}

module.exports = unfollowUser;