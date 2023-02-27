const Profile = require("../models").Profile;

function getProfilePic(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const userProfile = await Profile.findOne({ where: { userId: userId } });
            const profilePic = userProfile.profileImage;
            resolve(profilePic);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = getProfilePic;