const LikePost = require("../models").LikePost;

function unlikePost(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const likeInstance = await LikePost.destroy({ where: { postId: data.postId, userId: data.userId } });
            resolve("post unliked");
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = unlikePost;