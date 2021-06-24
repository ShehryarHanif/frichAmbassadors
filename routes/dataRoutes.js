const express = require('express');
const mysql = require("mysql");

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

const router = express.Router({mergeParams: true});

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/applicants", (req, res) => {
    const queryString = "SELECT * FROM applicants;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/ambassadors", (req, res) => {
    const queryString = "SELECT * FROM ambassadors;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/users", (req, res) => {
    const queryString = "SELECT * FROM users;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/ambassadors/:ambassadorIdentifier", (req, res) => {
    const queryString = "SELECT * FROM users WHERE user_ambassador_id = ? ORDER BY user_created_at DESC;";

    connection.query(queryString, req.params.ambassadorIdentifier, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/aggregateddatabase", (req, res) => {
    const queryString = "SELECT * FROM users INNER JOIN ambassadors ON users.user_ambassador_id = ambassadors.ambassador__applicant_id;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/aggregateddatabase/:ambassadorIdentifier", (req, res) => {
    const queryString = "SELECT * FROM users INNER JOIN ambassadors ON users.user_ambassador_id = ambassadors.ambassador__applicant_id  WHERE user_ambassador_id = ?;";

    connection.query(queryString, req.params.ambassadorIdentifier, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/applicants", (req, res) => {
    const queryString = "SELECT * FROM applicants;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/applicants/:applicantIdentifier", (req, res) => {
    const queryString = "SELECT * FROM users INNER JOIN ambassadors ON users.user_ambassador_id = ambassadors.ambassador__applicant_id  WHERE user_ambassador_id = ?;";

    connection.query(queryString, req.params.applicantIdentifier, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.post("/newuser", (req, res) => {
    const insertQuery = `INSERT INTO users SET ?;`;
    
    const values = {
        "user_name": req.body.user_name,
        "user_email": req.body.user_email,
        "user_registration_status": req.body.user_registration_status,
        "user_ambassador_id": req.body.user_ambassador_id,
        "user_referral_code": req.body.user_referral_code
    };

    connection.query(insertQuery, values, function(err, results){
        if (err){
            console.log("Insertion Error");

            console.log(err);
        } else{            
            res.json(results);
        }
    });
})

module.exports = router;