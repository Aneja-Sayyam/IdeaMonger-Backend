const Controller = require("../../controllers");

async function likePost(req, res) {
    try {
        const userId = req.body.userId;
        const postId = req.body.postId;
        const data = {
            "userId": userId,
            "postId" : postId
        }
        const like = await Controller.likePost(data);
        res.json(like);
    } catch (error) {
        res.json(error)
    }
}
module.exports = likePost;