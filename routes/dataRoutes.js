const express = require('express');
const mysql = require("mysql");
const bcrypt = require("bcryptjs");

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

const router = express.Router({mergeParams: true});

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const ambassadorAuthentication = authenticationMiddleware.ambassadorAuthentication;
const adminAuthentication = authenticationMiddleware.adminAuthentication;

router.get("/applicants", adminAuthentication, (req, res) => {
    const queryString = "SELECT * FROM applicants ORDER BY applicant_created_at DESC;;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/applicants/:applicantIdentifier", adminAuthentication, (req, res) => {
    const queryString = "SELECT * FROM applicants WHERE applicant_id = ?;";

    connection.query(queryString, req.params.applicantIdentifier, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results[0]);
        }
    });
});

router.post("/new-applicant", (req, res) => {
    const insertQuery = `INSERT INTO applicants SET ?;`;

    const values = {
        "applicant_first_name": req.body.applicant_first_name,
        "applicant_last_name": req.body.applicant_last_name,
        "applicant_email": req.body.applicant_email,
        "applicant_instagram": req.body.applicant_instagram,
        "applicant_tiktok": req.body.applicant_tiktok,
        "applicant_referral_code": req.body.applicant_referral_code,
        "applicant_question_one": req.body.applicant_question_one,
        "applicant_question_two": req.body.applicant_question_two,
        "applicant_registration_status": "pending"
    };

    connection.query(insertQuery, values, function(err, results){
        if (err){
            console.log("Insertion Error");

            console.log(err);
        } else{            
            res.json(results);
        }
    });
});

router.post("/applicants/status/", adminAuthentication, (req, res) => {
    const queryString = "UPDATE applicants SET applicant_registration_status = ? WHERE applicant_id = ?";

    connection.query(queryString, [req.body.status_update, req.body.applicant_id], function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/ambassadors", adminAuthentication, (req, res) => {
    const queryString = "SELECT * FROM ambassadors ORDER BY ambassador_created_at DESC;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{
            res.json(results);
        }
    });
});

router.get("/ambassadors/ambassador-info", ambassadorAuthentication, (req, res) => {
    const queryString = "SELECT ambassador_id, ambassador_first_name, ambassador_last_name, ambassador_email, ambassador_referral_code, ambassador_tier FROM ambassadors WHERE ambassadors.ambassador_id = ?;";

    connection.query(queryString, req.id, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{
            res.json(results[0]);
        }
    });
});

router.get("/ambassadors/users-info", ambassadorAuthentication, (req, res) => {
    const queryString = "SELECT * FROM users WHERE user_ambassador_id = ? ORDER BY user_created_at DESC;";

    connection.query(queryString, String(req.id), function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{
            res.json(results);
        }
    });
});

router.get("/ambassadors/:ambassadorIdentifier", adminAuthentication, (req, res) => {
    const queryString = "SELECT * FROM users WHERE user_ambassador_id = ? ORDER BY user_created_at DESC;";

    connection.query(queryString, req.params.ambassadorIdentifier, function(err, results){
        if (err){
            console.log("Search Error");
        } else{
            res.json(results);
        }
    });
});

router.post("/users/status/", adminAuthentication, (req, res) => {
    const queryString = "UPDATE users SET user_verification_status = ? WHERE user_id = ?";

    connection.query(queryString, [req.body.status_update, req.body.user_id], function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.post("/users/new-user", ambassadorAuthentication, (req, res) => {
    const insertQuery = `INSERT INTO users SET ?;`;
    
    const values = {
        "user_name": req.body.user_name,
        "user_email": req.body.user_email,
        "user_ambassador_id": req.id,
        "user_referral_code": req.body.user_referral_code,
        "user_verification_status": req.body.user_verification_status
    };

    connection.query(insertQuery, values, function(err, results){
        if (err){
            console.log("Insertion Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/ambassador-notifications", ambassadorAuthentication, (req, res) => {
    const queryString = "SELECT * FROM notifications ORDER BY notification_created_at DESC;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/admin-notifications", adminAuthentication, (req, res) => {
    const queryString = "SELECT * FROM notifications ORDER BY notification_created_at DESC;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.post("/new-notification", adminAuthentication, (req, res) => {
    const insertQuery = `INSERT INTO notifications SET ?;`;
    
    const value = {
        "notification_content": req.body.new_notification_content
    };

    connection.query(insertQuery, value, function(err, results){
        if (err){
            console.log("Insertion Error");

            console.log(err);
        } else{            
            res.json(results);
        }
    });
});

router.post("/delete-notification/:notificationIdentifier", adminAuthentication, (req, res) => {
    const deletionQuery = `DELETE FROM notifications WHERE ?;`;

    const value = {
        "notification_id": req.body.notification_id
    };

    connection.query(deletionQuery, value, function(err, results){
        if (err){
            console.log("Deletion Error");

            console.log(err);
        } else{            
            res.json(results);
        }
    });
});

router.get("/ambassadors-info", adminAuthentication, (req, res) => {
    const queryString = "SELECT ambassador_id, ambassador_first_name, ambassador_last_name, ambassador_email, ambassador_referral_code, COUNT(users.user_id) AS number_of_users, ambassador_tier FROM ambassadors LEFT JOIN users ON ambassadors.ambassador_id = users.user_ambassador_id GROUP BY ambassadors.ambassador_id ORDER BY ambassadors.ambassador_created_at DESC;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{            
            res.json(results);
        }
    });
});

router.get("/ambassadors-info/number", ambassadorAuthentication, (req, res) => {
    const queryString = "SELECT COUNT(users.user_id) AS number_of_users FROM users WHERE users.user_ambassador_id = ?";

    connection.query(queryString, req.id, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{            
            res.json(results[0]);
        }
    });
});

router.get("/ambassadors-info/verification-number", ambassadorAuthentication, (req, res) => {
    const queryString = "SELECT COUNT(users.user_id) AS verified_number_of_users FROM users WHERE users.user_ambassador_id = ? AND users.user_verification_status = 'accepted'";

    connection.query(queryString, req.id, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{                     
            res.json(results[0]);
        }
    });
});

router.get("/ambassadors-info/:ambassadorIdentifier", adminAuthentication, (req, res) => {
    const queryString = "SELECT * FROM ambassadors WHERE ambassador_id = ?;";

    connection.query(queryString, req.params.ambassadorIdentifier, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{            
            res.json(results[0]);
        }
    });
});

router.get("/ambassadors-info/:ambassadorIdentifier/number", adminAuthentication, (req, res) => {
    const queryString = "SELECT COUNT(users.user_id) AS number_of_users FROM users WHERE users.user_ambassador_id = ?";

    connection.query(queryString, req.params.ambassadorIdentifier, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{            
            res.json(results[0]);
        }
    });
});

router.get("/ambassadors-info/:ambassadorIdentifier/verification-number", adminAuthentication, (req, res) => {
    const queryString = "SELECT COUNT(users.user_id) AS verified_number_of_users FROM users WHERE users.user_ambassador_id = ? AND users.user_verification_status = 'accepted'";

    connection.query(queryString, req.params.ambassadorIdentifier, function(err, results){
        if (err){
            console.log("Search Error");

            console.log(err);
        } else{                     
            res.json(results[0]);
        }
    });
});

router.post("/applicants/ambassador-creator/", adminAuthentication, (req, res) => {
    const insertQuery = `INSERT INTO ambassadors SET ?;`;

    const setPassword = req.body.applicant_first_name.substring(0, 3) + req.body.applicant_last_name.substring(0, 3) + String(Math.floor(Math.random() * 100000));

    console.log(setPassword, req.body.applicant_first_name.substring(0, 3), req.body.applicant_last_name.substring(0, 3));

    const saltRounds = 10;

    bcrypt.hash(setPassword, saltRounds, function(err, hash) {
        if (err){
            console.log("Hashing Error");
        } else {
            const values = {
                "ambassador_first_name": req.body.applicant_first_name,
                "ambassador_last_name": req.body.applicant_last_name,
                "ambassador_email": req.body.applicant_email,
                "ambassador_instagram": req.body.applicant_instagram,
                "ambassador_tiktok": req.body.applicant_tiktok,
                "ambassador_referral_code": req.body.applicant_referral_code,
                "ambassador_password": hash || "genericPassword",
                "ambassador_tier": "bronze",
                "ambassador_applicant_id": req.body.applicant_id
            };
        
            connection.query(insertQuery, values, function(err){
                if (err){
                    console.log("Insertion Error");
        
                    console.log(err);
                } else{            
                    res.json({"setPassword" : setPassword});
                }
            });  
        }

    }); 

});

module.exports = router;