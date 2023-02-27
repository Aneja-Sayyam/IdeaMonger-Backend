module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://www.pinclipart.com/picdir/middle/351-3519728_png-file-svg-default-profile-picture-free-clipart.png",
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    highSchool: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    college: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    currentQualification: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    fieldOfInterests: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    expertise: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
  });
  Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Profile;
};
