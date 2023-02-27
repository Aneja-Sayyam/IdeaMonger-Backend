module.exports = (sequelize, DataTypes) => {
    const PostComment = sequelize.define("PostComment", {
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    PostComment.associate = (models) => {
        PostComment.belongsTo(models.Post, {
            foreignKey: "postId",
        });
      PostComment.belongsTo(models.User, {
        foreignKey : "userId"
      })
    }
    return PostComment;
}