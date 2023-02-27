const Post = require("../models").Post;

function getPostById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await Post.findOne({ where: { id: id } });
      resolve(post);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = getPostById;
