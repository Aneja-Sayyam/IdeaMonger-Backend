const Profile = require("../models").Profile;
const User = require("../models").User;

function findProfileByUserId(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await Profile.findOne({
        where: { userId: userId },attributes : {exclude : ["id","updatedAt","createdAt","userId"]}, include: [
        {model : User, attributes : ["firstName","lastName","email"]}
      ] });
      resolve(profile);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = findProfileByUserId;
