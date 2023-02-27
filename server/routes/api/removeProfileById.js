const Controller = require("../../controllers");

async function removeById(req,res){
    try{
        const id = req.body.userId;
        const profile = await Controller.removeProfileByUserId(id);
        res.json(profile);
    }
    catch(error){
        res.json(error);
    }
}

module.exports = removeById;