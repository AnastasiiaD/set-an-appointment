const mongoose = require("mongoose");
const { Types } = mongoose.Schema;

const wordSchema = mongoose.Schema({
    name: Types.String,
},{
    timestamps: {
        createdAt: "createdAt",
        updatedAt: false,
    },
});

module.exports = mongoose.model("Word", wordSchema);