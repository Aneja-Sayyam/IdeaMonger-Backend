const Controller = require("../../controllers");

async function createPostComment(req, res) {
    try {
        const data = {
            userId: req.body.userId,
            postId: req.body.postId,
            text: req.body.text
        }
        const newComment = await Controller.createPostComment(data);
        const commentId = newComment.dataValues.id;
        const comment = await Controller.getPostCommentById(commentId);
        res.json(comment);
    } catch (error) {
        res.json(error);
    }
}

module.exports = createPostComment;