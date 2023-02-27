const User = require("../models").User;

function getUsername(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({ where: { id: userId } });
            const firstName = user.firstName;
            const lastName = user.lastName;
            const username = {
                firstName,
                lastName
            }
            resolve(username);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = getUsername;