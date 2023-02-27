const PostComment = require("../models").PostComment;
const User = require("../models").User;
const Profile = require("../models").Profile;

function getPostCommentById(commentId) {
    return new Promise(async (resolve, reject) => {
        try {
            const comment = await PostComment.findOne({
              where: { id: commentId },
              include: [
                {
                  model: User,
                  attributes: ["firstName", "lastName"],
                  include: [
                    {
                      model: Profile,
                      attributes: ["profileImage"],
                      required: true,
                      as: "profile",
                    },
                  ],
                },
              ],
            });
            resolve(comment);
        } catch (error) {
            reject(error);
        }
    })    
}
module.exports = getPostCommentById;