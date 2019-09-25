const mongoose = require("mongoose");
require("dotenv").config();

function connectToDB() {
    const db = mongoose.connection;
    mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds251894.mlab.com:51894/news-db`, {
        useNewUrlParser: true,
        useCreateIndex: true,
    });

    db.on("error", (err) => {
        console.info("Mongoose default connection error: %s", err);
        process.exit(1);
    });
    db.on("disconnected", () => console.info("Mongoose default connection disconnected"));
    db.on("SIGINT", () => {
        db.close();
        process.exit();
    });

    return db;
}

module.exports = connectToDB;
