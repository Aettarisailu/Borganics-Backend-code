const express = require("express");
const EmailRoutes = express.Router();

const { UserFeedbackMail } = require("../controller/emailControllers");

EmailRoutes.post("/email", UserFeedbackMail);

module.exports = {
    EmailRoutes,
};