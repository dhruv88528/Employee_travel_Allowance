import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import AllowanceRequest from '../models/AllowanceRequest.js';
// register karne ke liye

export const createUser = async (req, res) => {
    const {name, email, department} = req.body;

    if(!name || !email || !department) {
        return res.json({success: false, message: "Missing details"});
    }
    try{
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.json({success: false, message: "User already exists"});
        }
       

        const user = new userModel({name, email, department});
        await user.save();

        res.json({success: true, message: "User created successfully", user});

    }
    catch(error){
        return res.json({success: false, message: error.message});
    }
}

// create AllowanceRequest 

export const createAllowanceRequest = async (req, res) =>{
    const {userId, amount, description} = req.body;
    if(!userId || !amount || !description){
        return res.json({success: false, message: "Missing details"});
    }

    try {
        // check if user exists
        const user = await userModel.findById(userId);
        if(!user){
            return res.json({success: false, message: "User not found"});
        }

        // create allowance request with userId
        const allowanceRequest = new AllowanceRequest({
            user: userId,   
            amount,
            description
        });

        await allowanceRequest.save();

        return res.json({
            success: true,
            message: "Allowance request created successfully",
            allowanceRequest
        });

    } catch(error) {
        return res.json({success: false, message: error.message});
    }
}
