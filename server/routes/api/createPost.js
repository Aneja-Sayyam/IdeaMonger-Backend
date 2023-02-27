const Controller = require("../../controllers");

const { v4: uuidv4 } = require("uuid");

async function createPost(req, res) {
  // console.log(req);
  if (req.files.length > 0) {
    const file = req.files[0];
    const imageId = uuidv4();
    require("fs").writeFileSync(`./uploads/${imageId}.jpg`, file.buffer);
    const imagePath = `http://localhost:3000/uploads/${imageId}.jpg`;
    req.body.imageSource = imagePath;
  }
  const newPost = {
    imageSource: req.body.imageSource,
    description: req.body.postDescription,
    userId: req.body.userId,
    mainTechUsed: req.body.mainTechUsed,
  };
  try {
    const createdPost = await Controller.createPost(newPost);
    res.json("post created");
  } catch (error) {
    console.log(error);
  }
}

module.exports = createPost;
