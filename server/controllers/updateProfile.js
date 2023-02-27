const Profile = require("../models").Profile;

function updateProfile(profile) {
  return new Promise(async (resolve, reject) => {
    try {
      const existingProfile = await Profile.findOne({ where: { userId: profile.userId } });
      const updatedProfile = await existingProfile.update(profile);
      resolve(updatedProfile);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = updateProfile;
