const express = require("express");
const wordRoutes = require("../services/WordService");
const emailRoutes = require("../services/EmailService");
const loginRoutes = require("../services/LoginService");
const tokenRoutes = require("../services/TokenService");
const withAuth = require("./../middlewares/auth");
const router = express.Router();

const middlewares = [withAuth];

router.post("/api/register/user", loginRoutes.registerUser);
router.post("/api/login/user", loginRoutes.authUser);
router.post("/api/logout/user", loginRoutes.logoutUser);

router.get("/api/words", middlewares, wordRoutes.getAll);
router.post("/api/add/service_provider", middlewares, );
router.delete("/api/delete/word/:id", middlewares, wordRoutes.removeWord);
router.post("/api/send/email", middlewares, emailRoutes.sendFullWebPageInfo);
router.get('/api/checkToken', middlewares, tokenRoutes.checkToken);
module.exports = router;