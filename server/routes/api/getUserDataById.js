const Controller = require("../../controllers");

async function getUserDataById(req, res) {
  console.log(req.body);
  const id = req.body.userId;
  try {
    const user = await Controller.getUserDataById(id);
    // const follows = await Controller.userFollows(id);
    const data = {
      user: user,
      // follows : follows 
    }
    // console.log(user);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
}

module.exports = getUserDataById;