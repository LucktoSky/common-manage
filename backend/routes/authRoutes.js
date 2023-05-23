const express = require("express");
const check = require("express-validator");

const router = express.Router();

const { authUser,authManage } = require("./../controllers/authController")

router.post('/user',authUser);
router.post('/manage',authManage);

module.exports = router;