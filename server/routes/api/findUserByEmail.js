const userController = require("../../controllers").users;

async function findUserByEmail(req,res){
    try{
        const email = req.body.email;
        const userId = await userController.findUserByEmail(email);
        res.json(userId);
    }catch(error){
        res.json(error);
    }
}

module.exports = findUserByEmail;