const expressRouter = require("./config/router");
const connectToDB = require("./config/db");
require("dotenv").config();

const app = expressRouter();
const db = connectToDB();

db.on("connected", function() {
    app.listen(process.env.PORT, "localhost", err => {
        if (err) {
            console.log(err);
            return;
        }
        console.info("==> Listening on port %s. Open up %s:%s/ in your browser.", process.env.PORT, process.env.DB_HOST, process.env.PORT);
    });
} );


