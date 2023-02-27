const Post = require("../models").Post;

function removePostById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await Post.destroy({ where: { id: id } });
      resolve("deleted");
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = removePostById;
