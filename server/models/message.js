module.exports = (sequelize,DataTypes)=>{
    const Message = sequelize.define("Message",{
        fromUser : {
            type : DataTypes.UUID,
            allowNull : false
        },
        content : {
            type : DataTypes.TEXT,
            allowNull : false
        }
    });
    Message.associate = (models) =>{
        Message.belongsTo(models.Room,{
            foreignKey : "roomId"
        });
    };
    return Message;
};
