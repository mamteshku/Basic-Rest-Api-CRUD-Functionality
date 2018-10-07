const logger=require('./../libs/loggerLib')
const response=require('./../libs/responseLib')
const check =require('./../libs/checkLib')

let isAuthenticated=(req,res,next)=>{
    if(req.params.authToken||req.params.authToken||req.header('authToken')){
        if(req.params.authToken=="Admin"||req.params.authToken=="Admin"||req.header('authToken')){
            req.user={fullName:'Admin',userId:'Admin'}
            next();
        }
        else{
            logger.error('Incorrect Authentication token','Authentication Middleware',5)
            let apiResponse=response.generate(true,'Incorrect Authentication token',403)
            res.send(apiResponse)
        }
    }
     else{
        logger.error('Authentication Token Missing','Authentication Middleware',5)
        let apiResponse=response.generate(true,'Authentication Token Missing',403)
        res.send(apiResponse)
        }
}

module.exports={
    isAuthenticated:isAuthenticated
}
