
function emailConfig() {
    return {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            // TODO: should be replaced with real sender's account
            // TODO: create new account for this purpose
            user: "hello@gmail.com",
            pass: "test",
        }
    };
}

function emailOptions(to, subject, text, html = "") {
    return {
        to,
        subject,
        text,
        html,
    }
}


module.exports = {
    emailConfig,
    emailOptions,
};