const Following = require("../models").Following;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

function unfollow(data) {
  return new Promise(async (resolve, reject) => {
      try {
      const response = await Following.findOne({
        where: {
          [Op.and]: [
            { userId: data.userId },
            { followingId: data.followingId },
          ],
        },
      });
      await response.destroy();
      resolve("unfollowed");
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = unfollow;
