const Controller = require("../../controllers");
const { v4: uuidv4 } = require("uuid");

async function update(req,res){
    try {
        if (req.files.length !== 0) {
            const file = req.files[0];
            const imageId = uuidv4();
            require("fs").writeFileSync(
              `./uploads/${imageId}.jpg`,
              file.buffer
            );
            const imagePath = `http://localhost:3000/uploads/${imageId}.jpg`;
            req.body.profileImage = imagePath;
        }

        const profile = req.body;
        const updatedProfile = await Controller.updateProfile(profile);
        res.json(updatedProfile);
        // res.json("Values Received");
    }catch(error){
        res.json(error);
    }
}

module.exports = update;