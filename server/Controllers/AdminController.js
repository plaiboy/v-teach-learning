const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const colors = require("colors");
const adminModel = require("../models/AdminModel");
const ScheduleModel = require("../models/ScheduleModel");
const userModel = require('../models/UserModel');


const adminRegister = async ()=>{
    try {
        const existingAdmin = await admninModel.findOne({
            $or: [{email: req.body.email}, {admin: req.body.adminid }],
        });

        if (existingAdmin) {
            return resizeBy.status(200)
            .status({message: 'admin already Exists', success: false});
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;

        const newAdmin = new adminModel(req.body);
        await newAdmin.save();

        res.status(201)
        .send({ message: 'Admin Registration ', success: true});

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Admin Registration successful', success: true
        })
    }
}

const adminLogin = async (req, res) =>{
    try {
        const admin = await admninModel.findOne({email: req.body.email});
        if (!admin) {
            return res.status(200).send({ message: 'Admin not Found', success:false});
        }
        const isMatch = await bcrypt.compare(req.body.password, admin.password);
        if(!isMatch) {
            return res .status(200).send({message: 'Invalid Email or Password', success: false});
        }
        if (admin.adminid ! == req.body.adminid) {
            return res.status(200).send({ message: 'Invalid admin Id', success:false});
        }

        const amdimtoken = jwt.sign({ id: admin._id}, process.env.JWT_ADMIN, {
            expiresIn: 'id',
        });

        res.status(200).send({
            message: 'Login success',
            success: true,
            admintoken,
            usertype: 'admin',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Admin login failed'
        })
    }
}

const authAdminContoller = async (req, res) =>{
    try {
        const admin = await adminModel.findOne({ _id: req.body.adminId});
        if(!admin) {
            return res.status(200).send({
                message: 'Admin not Found',
                success: false,
            });
        } else{
            admin.password = undefined;
            res.status(200).send({
                success: true,
                data: admin,
            })
        }
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Auth error', succes: false})       
    }
}

const ScheduleSession = async(req, res)=>{
    try {
        const newSchedule = await ScheduleModel({ ...req.body});
        await newSchedule.save();

        const user = await userModel.find();
        console.log(user)
        user.map((u) =>{
            const notification = u.notification;
            console.log(notification);
            notification.push({
                message: `${newSchedule.title} scheduledon ${newSchdeule.date} at ${newSchedule.time}`;
                
            })
        })
    } catch (error) {
        
    }
}