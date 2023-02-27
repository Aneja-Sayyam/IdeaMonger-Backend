const LikePost = require("../models").LikePost;

function likePost(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const like = await LikePost.create(data);
            resolve("Post Liked");
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = likePost;