const User = require("../models").User;

function removeById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.destroy({ where: { id: id } });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = removeById;
