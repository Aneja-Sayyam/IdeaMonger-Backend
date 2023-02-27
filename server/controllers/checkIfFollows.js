const Following = require("../models").Following;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

function checkIfFollows(data) {
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
            if (response) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = checkIfFollows;