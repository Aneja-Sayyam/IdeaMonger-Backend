const Controller = require("../../controllers");

async function searchUsersByName(req,res) {
    try {
        // console.log(req.body.searchInput);
        const data = await Controller.searchUsersByName(req.body.searchInput);
        // console.log(data);
        res.json(data);
    } catch (error) {
        res.json(error);
    }
}

module.exports = searchUsersByName;