module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4(),
      primaryKey: true,
    },
    thumbnailSource: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    title: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    city: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    state: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    address: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    topic: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    EventStartDate: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    EventEndDate: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    RegistrationStartDate: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    RegistrationEndDate: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    startTime: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    endTime: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    aboutEvent: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
  });
  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Event;
};
