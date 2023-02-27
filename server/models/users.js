module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id : {
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      primaryKey : true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwd:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: "userId",
      as: "posts",
    });
    User.hasMany(models.Following, {
      foreignKey: "userId",
      as: "userId",
    });
    User.hasMany(models.Following, {
      foreignKey: "followingId",
      as: "followingId",
    });
    User.hasMany(models.Event, {
      foreignKey: "userId",
      as: "events",
    });
    User.hasMany(models.PostComment, {
      foreignKey: "userId",
      as : "commented by"
    })
    // User.hasMany(models.Group,{
    //   foreignKey: "userId",
    //   as : "groups",
    // })
    User.hasOne(models.Profile, {
      foreignKey: "userId",
      as: "profile",
    });
  };
  return User;
};
