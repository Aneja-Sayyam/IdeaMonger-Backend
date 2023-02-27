const Following = require("../models").Following;
const User = require("../models").User;
const Profile = require("../models").Profile;

function userFollowedBy(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const followedBy = await Following.findAll({
        where: {
          followingId: userId,
        },
        attributes: ["userId"],
        include: [
          {
            model: User,
            as: "follower",
            attributes: ["firstName", "lastName"],
            include: [
              {
                model: Profile,
                as: "profile",
                attributes: ["profileImage"],
              },
            ],
          },
        ],
      });
      resolve(followedBy);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = userFollowedBy;
