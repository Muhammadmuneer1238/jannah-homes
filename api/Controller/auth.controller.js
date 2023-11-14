
import userModel from '../models/user.models.js'
import { errorHandler } from '../utils/error.js';
import bcrypt from 'bcrypt'



export const signUp = async (req, res, next) => {

    let { username, email, password } = req.body;
    console.log(req.body,'password');
    const hashedPassword = bcrypt.hashSync(password, 10)
    const db = new userModel({
        username,
        email,
        password: hashedPassword,

    })
    try {
        await db.save()
        res.status(201).json("User created successfully")


    }
    catch (error) {
        console.log(error);
        next(errorHandler(550, 'error from server'))

    }


}
