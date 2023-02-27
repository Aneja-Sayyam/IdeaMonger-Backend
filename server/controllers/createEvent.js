const Event = require("../models").Event;

function createEvent(newEvent) {
  return new Promise(async (resolve, reject) => {
    try {
      const createdEvent = await Event.create(newEvent);
      resolve(createdEvent);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = createEvent;
