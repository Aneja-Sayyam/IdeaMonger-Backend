const Controller = require("../../controllers");

async function removeById(req,res){
    try{
        const id = req.body.postId;
        const post = await Controller.removePostById(id);
        res.json(post);
    }catch(error){
        res.json(error);
    }
}

module.exports = removeById;