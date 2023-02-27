const Following = require("../models").Following;
const User = require("../models").User;
const Profile = require("../models").Profile;

function userFollows(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const follows = await Following.findAll({
        where: {
          userId: userId,
        },
        attributes: ["followingId"],
        include: [
          {
            model: User,
            as: "following",
            attributes: ["firstName", "lastName"],
                include: [
                    {
                        model: Profile,
                        as:"profile",
                        attributes: ["profileImage"]
                    }],
          },
        ],
      });
      resolve(follows);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = userFollows;
