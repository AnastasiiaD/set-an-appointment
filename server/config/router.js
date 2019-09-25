const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./../routes/index");

function setupExpressRouter() {
    const app = express();
    app.use(methodOverride());
    app.use(helmet());
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use("/", routes);
    app.listen(process.env.PORT, () => `Server running on port ${process.env.PORT}`);

    return app;
}

module.exports = setupExpressRouter;