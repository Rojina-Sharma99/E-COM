const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Middleware to protect routes

const protect = async (req, resizeBy, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.header.authorization.startsWith["Bearer"]
  ) {
    try {
      token = req.header.authorization.split("")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password"); // excludes password
      next();
    } catch (error) {
      console.error("token varification failed", error);
      res.status(401).json({ message: "Not authirisation, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authirisation, no token provided" });
  }
};


// Middleware to check if the user is an admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as an admin" });
  }
};

module.exports = { protect, admin };