const Controller = require("../../controllers");

async function getFollowersFollowings(req, res) {
    try {
        const userId = req.body.userId;
        const followers = await Controller.userFollowedBy(userId);
        
        const followings = await Controller.userFollows(userId);
        const data = {
            followers,
            followings
        }
        console.log('data : ',await data)
        res.json(data);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

module.exports = getFollowersFollowings;