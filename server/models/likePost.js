module.exports = (sequelize, DataTypes) => {
    const likePost = sequelize.define("LikePost", {
        userId: {
            type: DataTypes.UUID,
            allowNull : false
        }
  });
  likePost.associate = (models) => {
    likePost.belongsTo(models.Post, {
        foreignKey: "postId",
    });
    // likePost.hasMany(models.User),{
    //     foreignKey: "likedByUser",
    //     as: "userId",
    // }; 
  };
    return likePost;
};
