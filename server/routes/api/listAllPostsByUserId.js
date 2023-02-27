const Controller = require("../../controllers");

async function listAllPostByUserId(req,res){
    try{
        const userId = req.body.userId;
        const posts = await Controller.getAllPostsByUserId(userId);
        res.json(posts);
    }catch (error){
        console.log(error);
    }
}

module.exports = listAllPostByUserId;