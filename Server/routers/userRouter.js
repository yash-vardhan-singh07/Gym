const express = require('express');
const userRouter = express.Router();
const{upload, videos ,getAllContacts,deleteContact,contactUs}=require('../controller/video');





userRouter
.route('/setData')
.post(upload)

userRouter
.route('/getData')
.get(videos)


userRouter
.route('/contact')
.post(contactUs)


userRouter
.route('/getData/contact')
.get(getAllContacts)

userRouter
.route('/getData/contact/:id')
.delete(deleteContact)






module.exports = userRouter;








