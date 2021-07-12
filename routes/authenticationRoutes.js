const express = require('express');
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    expiresIn:  process.env.MAX_AGE
  });
};

const router = express.Router({mergeParams: true});

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/ambassador/", (req, res) => {
    const searchQuery = `SELECT * FROM ambassadors WHERE ambassador_email = ?;`;

    connection.query(searchQuery, req.body.ambassador_email, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{            
            bcrypt.compare(req.body.ambassador_password, results[0]["ambassador_password"], function(err, result) {
                if (err){
                    console.log("Matching Error");
                } else {
                    const token = createToken(results[0]["ambassador_id"]);

                    res.cookie("jwt", token, { httpOnly: true, maxAge: process.env.MAX_AGE * 1000 });

                    res.json(results[0]);
                }        
            }); 
        }
    });  
});

router.post("/admin/", (req, res) => {
});


module.exports = router;