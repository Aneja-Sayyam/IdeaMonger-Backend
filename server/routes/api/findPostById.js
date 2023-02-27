const Controller = require("../../controllers");

async function findOne(req,res){
    try{
        const id = req.body.id;
        const post = await Controller.getPostById(id);
        res.json(post);
    }catch(error){
        res.json(error);
    }
}

module.exports = findOne;