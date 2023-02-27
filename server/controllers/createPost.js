const Post = require("../models").Post;

function createPost(newPost) {
  return new Promise(async (resolve, reject) => {
    try {
      const createdPost = await Post.create(newPost);
      resolve(createdPost);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = createPost;
