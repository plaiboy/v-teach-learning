const userModel= require('../models/UserModel');
const Schedule = require('../models/ScheduleModel');
const bcrypt = require('bcryptjs');
const jwt = require('json-web-token');
const colors = require('colors');

const RegisterUser = async()=>{
    try {
        const existingUser = await userModel.findOne({ email: req.body.email});
        if(existingUser) {
            return res.status(200)
            .send({ message: 'user already exits'})
        }
        const password = req.body.password;
        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();

        res.status(201)
           .send({message: 'User Registration Success', success: true});


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'User registration failed'
        })
        
    }
}


const LoginUser = async()=>{
    try {
        const user = await userModel.findOne({email: req.body.email});
        if(!user) {
            return res.status(200)
                       .send({message: 'User Not Found', success: false});
        }
        const isMatch =await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(200).send({
              message: 'Inavlid email of password', success:false
            });
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{
                expiresIn: 'Id',
            });
            res.status(200).send({
                message: 'Login Success',
                success: true,
                token,
                usertype: 'user',
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'User Login Failed'
        })
    }
}

const authController = async(req, res) =>{
    try {
        const user = await userModel.findOne({_id: req.body.userId });

        if (!user) {
            return res.status(200).send({
                message: 'UserNot Found',
                success: false,
            });
        } else {
            user.password = undefined;
            res.status(200).send({
                success: true,
                data: user,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Auth Error', success: false, error});
    }
}

const getAllNotification = async(req, res) =>{
    try {
        const user = await userModel.find({_id: req.body.userId });
        const seeNotification = user.seeNotification;
        const notification = user.notification;
        seeNotification.push(...notification);
        user.notification = [];
        user.seeNotificati= notification
        const updateUser = await user.save();
        res.status(200).send({
            success: true,
            message: 'Notification Read',
            data: updateUser,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'Something went wrong',
            success: false,
            error,
        });
    }
}

const userSchedule = async (req, res) =>{
    try {
        const schedule = await scheduleModel.find({});
        if(!schedule) {
            return res.status(200).send({
                message: 'Error retrieving schedule',
                success: false,
            });
        } else {
            res.status(200).send({
                message: 'Schedule Data',
                success: true,
                daa: schedule,
            })
        }
    } catch (error) {
        console.log(error) 
        res.status(500).send({
            message: 'something went wrong',
            success: false,
            error,
        })
    }
}

const getUserInfo = async()=>{
    try {
        const user = await userModel.findOne({ _id: req.body.userId })
        res.status(200).send({
            success: true,
            message: 'User Data Fetch success',
            data: user,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success: false,
           message: 'Error in Fetching user details',
           error,
        })
    }
}
 module.exports = {
    LoginUser,
    RegisterUser,
    authController,
    getAllNotification,
    userSchedule,
    getUserInfo,
 };