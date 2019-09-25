const nodeMailer = require("nodemailer");
const config = require("./../config/email");

function sendFullWebPageInfo(req, res) {
    const emailConfig = config.emailConfig();
    const transporter = nodeMailer.createTransport(emailConfig);
    const mailOptions = config.emailOptions(
        "", // TODO
        "", // TODO
        "", // TODO
        "",
    );

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return;
    });
}

module.exports = {
    sendFullWebPageInfo,
};