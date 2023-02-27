const PostComment = require("../models").PostComment;

function createPostComment(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const createdComment = await PostComment.create(data);
            resolve(createdComment);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = createPostComment;