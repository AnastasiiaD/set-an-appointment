const mongoose = require("mongoose");
const bcRypt = require("bcrypt");

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},{
    timestamps: {
        createdAt: "createdAt",
        updatedAt: false,
    },
});

UserSchema.pre("save", function(next) {
    if (this.isNew || this.isModified("password")) {
        const document = this;
        bcRypt.hash(document.password, saltRounds,
            function(err, hashedPassword) {
                if (err) {
                    next(err);
                }
                else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
    bcRypt.compare(password, this.password, function(err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
};

module.exports = mongoose.model("User", UserSchema);