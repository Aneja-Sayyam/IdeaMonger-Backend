const User = require("../models").User;
const Profile = require("../models").Profile;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

function searchUsersByName(name) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await User.findAll({
        attributes: ["firstName", "lastName", "id"],
        include: [
          {
            model: Profile,
            required: true,
            as: "profile",
            attributes: ["profileImage"],
          },
        ],
        where: {
          firstName: { [Op.like]: `%${name}%` },
        },
      });
      const items = [];
      data.forEach((user) => {
        const dataValues = {
          fullName: `${user.dataValues.firstName} ${user.dataValues.lastName}`,
            id: user.dataValues.id,
          profileImage : user.dataValues.profile.profileImage
        };
          items.push(dataValues);
      });
        // console.log(items);
        // console.log(data);

        resolve(items);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = searchUsersByName;
