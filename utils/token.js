const jwt = require("jsonwebtoken");

const createNewToken = (payload) => {
  // ERROR : ==> evn
  return jwt.sign({ userId: payload }, process.env.SECRET_KEY, {
    expiresIn: "10d",
  });
};

// ERROR : ==> missing export
module.exports = { createNewToken };
