const Controller = require("../../controllers");

async function unlikePost(req, res) {
    try {
        const postInstance = await Controller.unlikePost(req.body);
        res.json(postInstance);
    } catch (error) {
        res.json(error);
    }
}

module.exports = unlikePost;