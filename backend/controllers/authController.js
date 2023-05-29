const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validationResult = require("express-validator");

const User = require("./../models/userModel");
const { json } = require("express");

const authUser = async ( req, res ) => {

    // const errors = validationResult(req);
    // if( !errors.isEmpty() ) {
    //     return res.json({ errors: errors.array() });
    // }
    
    const { email, password } = req.body;
    try {
        console.log(req.body)
        const user = await User.findOne({ email });
        if( !user ) return res.json({ message: 'user not found' });

        // const passCorrect = await bcryptjs.compare(password, user.password);

        var now = new Date();
        const passCorrect = (user.password==password)?false:true;
        if(passCorrect ) return res.json({ message: 'password not matched' });
     
        const timeE = (user.endDate - now > 0)?false:true;
        if(timeE) return res.json({ message: 'the licence expired' });
        
        const payload = {
            user: {
                id: user.id,
                email:user.email
            }
        };

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 86400 // 1day
        }, ( error, token ) => {
            if( error ) throw error;
            res.json({ token });
        });
    } catch(err) {
        console.error(err);
    }
};
const authManage = async ( req, res ) => {

    // const errors = validationResult(req);
    // if( !errors.isEmpty() ) {
    //     return res.json({ errors: errors.array() });
    // }

    const { email, password } = req.body;
    console.log(email)
    try {
        console.log(req.body)
        const user = await User.findOne({ email });
        if( !user ) return res.json({ message: 'user not found' });
        if(user.name!="admin") return res.json({ message: 'no administrator' });
             
        // const passCorrect = await bcryptjs.compare(password, user.password);
        const passCorrect = (user.password==password)?false:true;
        if(passCorrect ) return res.json({ message: 'password not matched' });
        const payload = {
            user: {
                id: user.id,
                email:user.email,
                name:user.name
            }
        };
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 600 // 10min
        }, ( error, token ) => {
            if( error ) throw error;
            res.json({ token });
        });
    } catch(err) {
        console.error(err);
    }
};
module.exports = {authUser, authManage}