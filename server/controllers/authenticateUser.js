const User = require("../models").User;

function authenticateUser(email,passwd){
    return new Promise(async (resolve,reject)=>{
        try{
            const user = await User.findOne({ where: { email: email } });
            // console.log(user);
            if (user){
                if (passwd ===  user.passwd)
                    resolve({
                        authenticated : true,
                        userId : user.id
                    });
                else
                    resolve({
                      authenticated: false
                    });
            } else {
                resolve({
                  authenticated: false
                });
            }
        }catch(error){
            reject(error);
        }
    });
}

module.exports = authenticateUser;