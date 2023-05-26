const express = require("express");
const router = express.Router();
const {home, createUser, getUsers, editUser, deleteUser, getUsers1,getUser} = require("./../controllers/userController")

router.post("/createUser", createUser);
router.post("/getUsers", getUsers)
router.put("/editUser/:id",editUser)
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;