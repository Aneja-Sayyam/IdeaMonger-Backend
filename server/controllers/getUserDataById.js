const User = require("../models").User;
const Profile = require("../models").Profile;
const Post = require("../models").Post;

function findOne(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({
        where: { id: userId },
        include: [
          { model: Profile, as: "profile" },
          { model: Post, as: "posts" },
        ],
      });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = findOne;

// { model: Following, as: "following" },