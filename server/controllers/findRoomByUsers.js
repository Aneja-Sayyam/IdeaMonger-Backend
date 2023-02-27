const Sequelize = require("sequelize");
const userExists = require("./userExists");
const Room = require("../models").Room;
const Op = Sequelize.Op;
// const Controller = require("./");

function findRoomByUsers(users) {
  return new Promise(async (resolve, reject) => {
    try {
      const userA = await userExists(users.userA);
      const userB = await userExists(users.userB);
      if (userA) {
        if (userB) {
          const room = await Room.findOne({
            where: {
                  [Op.or]: [{
                      [Op.and]: [
                          {
                              userA: { [Op.eq]: users.userA },
                          },
                          {
                              userB: { [Op.eq]: users.userB },
                          },
                      ]
                  },{
                [Op.and]: [
                  {
                    userA: { [Op.eq]: users.userB },
                  },
                  {
                    userB: { [Op.eq]: users.userA },
                  },
                ],
              }],
            },
          });
          if (room === null) {
            resolve("Not Found");
          } else {
            resolve(room);
          }
        }
      }
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = findRoomByUsers;
