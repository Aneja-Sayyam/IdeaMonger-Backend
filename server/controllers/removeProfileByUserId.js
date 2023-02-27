const Profile = require("../models").Profile;

function removeByUserId(userId){
    return new Promise(async (resolve,reject)=>{
        try{
            const profile = await Profile.destroy({where: {userId:userId}});
            resolve(profile);
        }catch(error){
            reject(error);
        }
    })
}

module.exports = removeByUserId;