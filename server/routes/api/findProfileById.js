const Controller = require("../../controllers");

async function findOne(req,res){
    try{
        const id = req.body.userId;
        const profile = await Controller.findProfileByUserId(id);
        res.json(profile);
    }catch(error){
        res.json(error);
    }
}

module.exports = findOne;