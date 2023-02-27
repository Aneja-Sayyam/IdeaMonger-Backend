const Following = require("../models").Following;

function follow(data){
    return new Promise(async(resolve,reject)=>{
        try {
            const followUser = await Following.create(data);
            resolve(followUser);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = follow;