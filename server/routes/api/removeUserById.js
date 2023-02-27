const Controller = require("../../controllers");

async function removeUserById(req,res){
    const id = req.body.userId;
    try{
        await Controller.removeProfileByUserId(id);
        const user = await Controller.removeUserById(id);
        res.json({"Deleted" : "True"})
    }catch(error){
        res.json(error);
    }
}

module.exports = removeUserById;