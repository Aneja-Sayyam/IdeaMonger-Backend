const User = require("../models").User;
const Profile = require("../models").Profile;

function getIdInfo(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({ where: { id: userId } });
            const userName = `${user.firstName} ${user.lastName}`;
            const userProfile = await Profile.findOne({
              where: { userId: userId },
            });
            const profileImage = userProfile.profileImage;
            const idInfo = {
                userName: userName,
                profileImage: profileImage
            };
            resolve(idInfo);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = getIdInfo;