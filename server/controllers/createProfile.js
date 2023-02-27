const Profile = require("../models").Profile;

function createProile(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const createdProfile = await Profile.create(userId);
      resolve(createdProfile);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = createProile;
