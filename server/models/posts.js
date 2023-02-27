module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    imageSource: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mainTechUsed: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Post.hasMany(models.LikePost, {
      foreignKey: "postId",
      as: "likedBy",
    });
    Post.hasMany(models.PostComment, {
      foreignKey: "postId",
      as: "commentBy",
    });
  };
  return Post;
};
