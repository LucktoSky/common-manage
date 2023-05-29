
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  const  token  = req.headers.token;
  if (!token) {
    return res.json({ message: `sign in error` });
  }

  const decodedData = jwt.verify(token, process.env.SECRET);
  if(!decodedData.user.name&&decodedData.user.name!='admin'){
    return res.json({ message: `not administrator` });
  }
  next();
};

