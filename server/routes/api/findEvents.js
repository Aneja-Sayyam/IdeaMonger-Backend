const Controller = require("../../controllers");

async function findEvents(req, res) {
    try {
        const events = await Controller.findEvents();
        res.json(events);
    } catch (error) {
        res.json(error);
    }
}

module.exports = findEvents;