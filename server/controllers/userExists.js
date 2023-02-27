const User = require("../models").User;

function userExists(userId){
    return new Promise(async(resolve,reject)=>{
        try{
            const user = await User.findOne({where : {id : userId}});
            if (user !== null){
                resolve(true);
            }else{
                resolve(false);
            }
        }catch(error){
            reject(error);
        }
    })
}

module.exports = userExists;