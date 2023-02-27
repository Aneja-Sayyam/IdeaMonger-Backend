const Controller = require("../../controllers");

async function loginUser(req,res){
    try{
        const email = req.body.email;
        const passwd = req.body.passwd;
        const isUserAuthentic = await Controller.authenticateUser(email,passwd);
        if(isUserAuthentic.authenticated){
            res.json({
                "access" : "granted",
                "userId": isUserAuthentic.userId
            });
        }
        else{
            res.json({
                "access" : "denied"
            })
        }
    }catch(error){
        console.log(error);
        res.json(error);
    }
}

module.exports = loginUser;