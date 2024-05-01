// routes/admin.routes.js this for admin loginpage
const express = require('express');
const { adminLogin } = require('../admin/admin.controller');
const adminRoutes = express.Router();
adminRoutes.post('/admin/login', adminLogin);
module.exports = { adminRoutes };
