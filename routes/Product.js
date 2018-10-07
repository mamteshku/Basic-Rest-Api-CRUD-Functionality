const express = require('express')
const blogController = require('../controllers/blogController')
const appConfig = require("../config/appConfig")

//const example=require('./../middlewares/example')
const auth = require('../middlewares/auth')


let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion+'/products';

    app.get(baseUrl+'/all',blogController.getAllBlog);

    app.get(baseUrl+'/view/:blogId',auth.isAuthenticated,blogController.viewByBlogId);
 
    app.get(baseUrl+'/view/by/author/:author',auth.isAuthenticated,blogController.viewByAuthor);

    app.get(baseUrl+'/view/by/category/:category',auth.isAuthenticated,blogController.viewByCategory);

    app.post(baseUrl+'/:blogId/delete',auth.isAuthenticated,blogController.deleteBlog);

    app.put(baseUrl+'/:blogId/edit',auth.isAuthenticated,blogController.editBlog);

    app.post(baseUrl+'/create',blogController.createBlog);

    app.get(baseUrl+'/:blogId/count/view',auth.isAuthenticated,blogController.increaseBlogView);

    

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}