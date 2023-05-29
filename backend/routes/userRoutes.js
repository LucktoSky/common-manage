const express = require("express");
const router = express.Router();
const {home, createUser, getUsers, editUser, deleteUser} = require("./../controllers/userController")
const { isAuthenticatedUser } = require("../middleware/auth");

router.post("/createUser", isAuthenticatedUser,createUser);
router.post("/getUsers", isAuthenticatedUser, getUsers)
router.put("/editUser/:id",isAuthenticatedUser, editUser)
router.delete("/deleteUser/:id",isAuthenticatedUser, deleteUser);

module.exports = router;