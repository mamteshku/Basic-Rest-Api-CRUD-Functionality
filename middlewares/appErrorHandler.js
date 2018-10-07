 const response = require('./../libs/responseLib')

 let errorHandler=(err,req,res,next)=>{
     console.log('application error handler will be called');
     console.log(err);
     let apiResponse=response.generate(true,'Some error occured at the global level',500,null)
     res.send(apiResponse)
 }//end request ip logger function

 let notFoundHandler=(req,res,next)=>{
    let apiResponse=response.generate(true,'Route not found in the application',404,null)
     res.status(404).send(apiResponse)
 }//end not found handler


 module.exports = {
    globalErrorHandler:errorHandler,
    globalNotFoundHandler:notFoundHandler
 }