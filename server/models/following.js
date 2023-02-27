module.exports = (sequelize,DataTypes)=>{
    const Following = sequelize.define("Following", {
      followingId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    });
  Following.associate = (models) => {
    Following.belongsTo(models.User, {
      foreignKey: "followingId",
      as: "following",
    });
    Following.belongsTo(models.User, {
      foreignKey: "userId",
      as:"follower"
    });
  };
    return Following;
}