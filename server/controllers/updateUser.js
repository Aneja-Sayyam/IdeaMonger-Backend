const User = require("../models").User;

function update(user){
    return new Promise(async (resolve,reject)=>{
        try{
              const existingUser = await User.findOne({where : {id :user.userId}});
              const updatedUser = await existingUser.update(user);
              resolve(updatedUser);
        }catch (error){
            reject(error);
        }
    })
}

module.exports = update;