const mongoose = require("mongoose");
const bcRypt = require("bcrypt");

const saltRounds = 10;

const ServiceProviderSchema = new mongoose.Schema({
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