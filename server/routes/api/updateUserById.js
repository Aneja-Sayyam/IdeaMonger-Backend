const Controller = require("../../controllers");

async function update(req,res){
    try{
        const user = req.body;
        const updatedUser = await Controller.updateUser(user);
        res.json(updatedUser);
    }catch(error){
        res.json(error);
    }
}

module.exports = update;