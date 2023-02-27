const Controller = require("../../controllers");

async function update(req, res) {
  try {
    const post = req.body;
    const updatedPost = await Controller.updatePost(post);
    res.json(updatedPost);
  } catch (error) {
    res.json(error);
  }
}

module.exports = update;
