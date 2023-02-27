const Controller = require("../../controllers");

async function followUser(req, res) {
    try {
        const data = {
            userId: req.body.follower,
            followingId : req.body.following
        }
        const exists = await Controller.checkIfFollows(data);
        if (!exists) {
            const follow = await Controller.follow(data);
            res.json(follow);
            
        }
    } catch (error) {
        res.json(error);
    }
}

module.exports =  followUser;