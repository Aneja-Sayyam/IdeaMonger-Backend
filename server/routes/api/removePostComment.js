const Controller = require("../../controllers");

async function removePostComment(req, res){
    try {
        const commentId = req.body.commentId;
        const comment = await Controller.removePostComment(commentId);
        res.json(comment);
    } catch (error) {
        res.json(error)
    }
}

module.exports = removePostComment;