const Controller = require("../../controllers");

async function createUser(req, res) {
  try {
    const user = await Controller.findUserByEmail(req.body.email);
    if (user) {
      res.json("User Already Exists");
    } else {
     const newUser = req.body;
     const createdUser = await Controller.createUser(newUser);
     const userId = await createdUser.id;
     const data = {
       userId: userId,
     };
     await Controller.createProfile(data);
     res.json("user created"); 
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = createUser;
