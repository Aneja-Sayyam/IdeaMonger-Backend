const User = require("../models").User;

function create(newUser){
    return new Promise(async (resolve,reject)=>{
        try{
            const createdUser = await User.create(newUser);
            resolve(createdUser);
        }catch (error){
            reject(error);
        }
    });
}

module.exports = create;