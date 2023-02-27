const Controller = require("../../controllers");

async function createProfile(req,res){
    const newProfile = req.body;
    try {
        const createdProfile = await Controller.createProfile(newProfile);
        res.json(createdProfile);
      } catch (error) {
        console.log(error);
      }
    }
    
module.exports = createProfile;