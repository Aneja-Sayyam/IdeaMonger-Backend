const Controller = require("../../controllers");

const { v4: uuidv4 } = require("uuid");

async function createEvent(req, res) {
  try {
    if (req.files.length > 0) {
      const file = req.files[0];
      const imageId = uuidv4();
      require("fs").writeFileSync(`./uploads/${imageId}.jpg`, file.buffer);
      const imagePath = `http://localhost:3000/uploads/${imageId}.jpg`;
      req.body.thumbnailSource = imagePath;
    }
    const newEvent = {
      thumbnailSource: req.body.thumbnailSource,
      aboutEvent: req.body.aboutEvent,
      topic: req.body.topic,
      title: req.body.title,
      city: req.body.city,
      state:req.body.state,
      address: req.body.address,
      EventStartDate: req.body.eventStartDate,
      EventEndDate: req.body.eventEndDate,
      RegistrationStartDate: req.body.registrationStartDate,
      RegistrationEndDate: req.body.registrationEndDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      userId: req.body.userId,
    };

    await Controller.createEvent(newEvent);
    res.json("event created");
  } catch (error) {
    console.log(error);
  }
}

module.exports = createEvent;
