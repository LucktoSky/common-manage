require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express();

// Connect to MongoDB
require("./config/mongodb_connect").connect();

// built-in middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
app.use('/user',userRoutes);
app.use('/auth', authRoutes);

app.use(express.static("dist"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
   });
module.exports = app;