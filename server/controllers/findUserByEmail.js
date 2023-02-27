const User = require("../models").User;

function findUserByEmail(email){
    return new Promise(async (resolve,reject) =>{
        try{
            const user = await User.findOne({ where: { email: email } });
            if (user) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }catch(error){
            reject(error);
        }
    });
}

module.exports = findUserByEmail;