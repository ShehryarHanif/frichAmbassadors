const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = require("../middleware/authenticationMiddleware");

const connectionRequirements = {
    host : process.env.RDS_HOSTNAME,
    user : process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE
};

const connection = mysql.createConnection(connectionRequirements);

connection.connect(function(error){
    if(error){
        console.log("Connection Error");
    } else{
        console.log("Successful Connection");
    }
});

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn:  String(process.env.MAX_AGE)
  });
};

const router = express.Router({mergeParams: true});

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const ambassadorAuthentication = authenticationMiddleware.ambassadorAuthentication;
const adminAuthentication = authenticationMiddleware.adminAuthentication;

router.post("/ambassador", (req, res) => {
    const searchQuery = `SELECT * FROM ambassadors WHERE ambassador_email = ?;`;

    connection.query(searchQuery, req.body.ambassador_email, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else if (results.length === 0) {
            res.status(401).send("Email Problem");
        } else {            
            bcrypt.compare(req.body.ambassador_password, results[0]["ambassador_password"], function(err) {
                if (err){
                    console.log("Matching Error");

                    res.status(401).send("PROBLEM");
                } else {
                    const token = createToken(results[0]["ambassador_id"]);

                    res.cookie("token", token, { httpOnly: true, secure: true });

                    res.json(results[0]);
                }        
            }); 
        }
    });  
});

router.post("/admin", (req, res) => {
    if(req.body.admin_email === process.env.ADMIN_EMAIL && req.body.admin_password === process.env.ADMIN_PASSWORD){
        const token = createToken(process.env.ADMIN_IDENTIFIER);

        res.cookie("token", token, { httpOnly: true, secure: true });

        res.json(token);
    } else {
        console.log("Admin Error");

        res.status(401).send("PROBLEM");
    }
});

router.get("/check-ambassador-token", ambassadorAuthentication, function(req, res) {    
    res.sendStatus(200);
});

router.get("/check-admin-token", adminAuthentication, function(req, res) {
    res.sendStatus(200);
});

router.get("/log-out", (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        res.status(401).send("Unauthorized: No Token Provided");
    } else {
        res.cookie("token", "DELETED", { MaxAge: "-1" });

        res.sendStatus(200);
    }
});
  
module.exports = router;