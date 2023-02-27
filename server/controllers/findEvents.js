const Event = require("../models").Event;
const User = require("../models").User;
const Profile = require("../models").Profile;

function findEvents() {
  return new Promise(async (resolve, reject) => {
    try {
        const events = await Event.findAll({
        include: [
          {
            model: User,
            attributes: ["firstName", "lastName"],
            required: true,
            include: [
              {
                model: Profile,
                attributes: ["profileImage"],
                required: true,
                as: "profile",
              },
            ],
          },
        ],
      });
      resolve(events);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = findEvents;
