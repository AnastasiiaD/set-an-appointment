const User = require("./../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function registerUser(req, res){
    const { firstName, lastName, company, email, password } = req.body;
    const user = new User({ firstName, lastName, company, email, password });

    user.save().then(() => {
        res.status(200).json({msg: "Welcome to the club!"});
    }).catch(err => {
        res.status(404).json({
            msg: (err && err.message) || "User not saved!"
        });
    });

};

function authUser(req, res){
    const { email, password } = req.body;

    User.findOne({ email }).then( user => {
       if(!user) {
           res.status(401).json({
                msg: "Incorrect email or password"
           });
           return;
       }

        user.isCorrectPassword(password, function(err, same) {
            if(err){
                res.status(500).json({
                    msg: "Internal error please try again"
                });
                return;
            }

            if(!same) {
                res.status(401).json({
                    msg: "Incorrect password!"
                });
                return;
            }

            const payload = { email };
            const token = jwt.sign(payload, process.env.SECRET, {
                expiresIn: "1h"
            });
            res.cookie("token", token, { httpOnly: true })
                .sendStatus(200);
       });
    }).catch( err => {
        res.status(401).json({
            msg: err.message
        });
    });
};

function logoutUser(req, res) {
    res.clearCookie("token");
    res.sendStatus(200);
};

module.exports = {
    authUser,
    registerUser,
    logoutUser,
};