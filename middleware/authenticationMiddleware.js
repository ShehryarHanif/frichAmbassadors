const jwt = require("jsonwebtoken");

const ambassadorAuthentication = function(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).send("Unauthorized: No Token Provided");
    } else {
      jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if (err || decoded.id === process.env.ADMIN_IDENTIFIER) {
            res.status(401).send("Unauthorized: Invalid Token");
        } else {
          req.id = decoded.id;

          next();
        }
      });
    }
};

const adminAuthentication = function(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).send("Unauthorized: No Token Provided");
    } else {
      jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if (err || decoded.id !== process.env.ADMIN_IDENTIFIER) {
          res.status(401).send("Unauthorized: Invalid Token");
        } else {
          next();
        }
      });
    }
};

module.exports = {
    ambassadorAuthentication: ambassadorAuthentication,
    adminAuthentication: adminAuthentication
};