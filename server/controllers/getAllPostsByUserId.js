const PostComment = require("../models").PostComment;
const Post = require("../models").Post;
const LikePost = require("../models").LikePost;
const User = require("../models").User;
const Profile = require("../models").Profile;

function getAllPostsByUserId(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const posts = await Post.findAll({
        
        order: [["id", "DESC"]],
        include: [
          {
            model: User,
            attributes: ["firstName", "lastName"],
            required: true,
            include: [
              {
                model: Profile,
                attributes: ["profileImage"],
                required: true,
                as: "profile",
              },
            ],
          },
          { model: LikePost, as: "likedBy" },
          {
            model: PostComment,
            as: "commentBy",
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
          },
        ],
      });
      resolve(posts);
    } catch (error) {
      reject(error);
    }

  });
}

module.exports = getAllPostsByUserId;
