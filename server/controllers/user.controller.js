const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY
const bcrypt = require("bcrypt");
const asyncHandler = require('express-async-handler');
const { authenticate, generateToken } = require("../config/jwt.config");

module.exports = {
    register: asyncHandler(async (req, res) => {
        const { firstName, lastName, email, password, picture } = req.body;

        console.log(req.body)

        if (!firstName || !lastName || !email || !password) {
            res.status(400);
            throw new Error("Please enter all the fields");
        } else {
             
            const potentialUser = await User.findOne({ email });
            
            if(potentialUser){
                res.status(400);
                throw new Error("User already exists");

            } else{
            
                const newUser = await User.create({
                    firstName,
                    lastName,
                    email,
                    password,
                    picture
                });

                    if (newUser) {
                        res.status(201).json({
                            _id: newUser._id,
                            firstName: newUser.firstName,
                            lastName: newUser.lastName,
                            email: newUser.email,
                            picture: newUser.picture,
                            token: generateToken(newUser._id),
                        });
                    } else {
                        res.status(400);
                        throw new Error("Failed to create new user")
                    }
        }}}),
            
            

        //         const userToken = jwt.sign({_id:newUser.id, email:newUser.email}, secret, {expiresIn: "1d"});

        //     res.cookie("usertoken", userToken, {
        //         httpOnly: true
        //     }).json({message: "success", user: newUser});
        // }
        // }catch(err){
        // console.log(err);
        // return res.status(400).json(err);
        
// register: async (req, res) => {
//     try{
//         console.log("Print something", req.body)
//         const potentialUser = await User.findOne({email: req.body.email});
//         if(potentialUser){
//             res.status(400).json({message: "Email already exists"});
//         }else{
//             const newUser = await User.create(req.body);
//             const userToken = jwt.sign({_id:newUser.id, email:newUser.email}, secret, {expiresIn: "1d"});
//             res.cookie("usertoken", userToken, {
//                 httpOnly: true
//             }).json({message: "success", user: newUser});
//         }
//     }catch(err){
//         console.log(err);
//         return res.status(400).json(err);
//     }
// }),
    login: async (req, res) => {
        try {
            const user = await User.findOne({email: req.body.email});
            if(user){
                const passwordMatch = await bcrypt.compare(req.body.password, user.password);
                if(passwordMatch){
                    const userToken = jwt.sign({_id:user.id, email:user.email}, secret, {expiresIn: "1d"});
                    res.cookie("usertoken", userToken, {
                        httpOnly: true
                    }).json({message: "success", user: user});
                }
                else{
                res.status(400).json({message: "Invalid login attempt"});
                }
            }else{
                res.status(400).json({message: "Invalid login attempt"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie("usertoken").json({message: "success"});
        }
        catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    },
    findAllUsers: async (req, res) => {
        try {
            const allUsers = await User.find(); // Assuming User.find() returns a promise
            res.json({ users: allUsers });
        } catch (err) {
            res.status(400).json(err);
        }
    }
}