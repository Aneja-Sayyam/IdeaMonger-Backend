const PostComment = require("../models").PostComment;

function removePostComment(commentId) {
    return new Promise(async (resolve, reject) => {
        try {
            await PostComment.destroy({ where: { id: commentId } });
            resolve("comment deleted");
        } catch (error) {
            reject(error);
      }  
    })
}

module.exports = removePostComment;