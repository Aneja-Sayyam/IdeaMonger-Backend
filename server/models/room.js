module.exports = (sequelize,DataTypes)=>{
    const Room = sequelize.define("Room",{
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true
        },
        userA : {
            type : DataTypes.UUID,
            allowNull : false
        },
        userB : {
            type : DataTypes.UUID,
            allowNull : false
        }
    });
    Room.associate = (models)=>{
        Room.hasMany(models.Message,{
            foreignKey : "roomId",
            as : "Messages"
        });
    };
    return Room;
};