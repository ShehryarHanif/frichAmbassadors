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
    const queryString = "SELECT * FROM applicants ORDER BY applicant_created_at DESC;;";

    connection.query(queryString, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.get("/ambassadors", (req, res) => {
    const queryString = "SELECT * FROM ambassadors ORDER BY ambassador_created_at DESC;";

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

router.get("/notifications", (req, res) => {
    const queryString = "SELECT * FROM notifications ORDER BY notification_created_at DESC;";

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

router.post("/applicants/status/:identifier", (req, res) => {
    const queryString = "UPDATE applicants SET applicant_registration_status = ? WHERE applicant_id = ?";

    console.log("here");

    connection.query(queryString, [req.body.status_update, req.body.applicant_id], function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results);
        }
    });
});

router.post("/applicants/ambassadorcreator/:identifier", (req, res) => {
    const insertQuery = `INSERT INTO ambassadors SET ?;`;

    const setPassword = null;
    
    const values = {
        "ambassador_first_name": req.body.applicant_first_name,
        "ambassador_last_name": req.body.applicant_last_name,
        "ambassador_email": req.body.applicant_email,
        "ambassador_instagram": `${req.body.applicant_instagram}`,
        "ambassador_tiktok": `${req.body.applicant_tiktok}`,
        "ambassador_referral_code": req.body.applicant_referral_code,
        "ambassador_password": setPassword || "genericPassword",
        "ambassador_tier": "bronze",
        "ambassador_applicant_id": req.body.applicant_id
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

router.get("/applicants/:applicantIdentifier", (req, res) => {
    const queryString = "SELECT * FROM applicants WHERE applicant_id = ?;";

    connection.query(queryString, req.params.applicantIdentifier, function(err, results){
        if (err){
            console.log("Search Error");
        } else{            
            res.json(results[0]);
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
});

router.post("/newnotification", (req, res) => {
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

router.post("/deletenotification/:notificationidentifier", (req, res) => {
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


// router.post("/ambassador", (req, res) => {
//     const selectionQuery = `SELECT * from applicants WHERE applicant_id = ${req.body.applicant_id}`;

//     connection.query(selectionQuery, function(err, results){
//         if (err){
//             console.log("Selection Error");

//             console.log(err);
//         } else{
//             const insertionQuery = "INSERT INTO ambassadors SET ?;";
            
//             const returnedApplicant = results[0];

//             const requiredValues = {
//                 "ambassador_first_name": returnedApplicant["applicant_first_name"],
//                 "ambassador_last_name": returnedApplicant["applicant_last_name"],
//                 "ambassador_email": returnedApplicant["applicant_email"],
//                 "ambassador_instagram": returnedApplicant["applicant_instagram"],
//                 "ambassador_tiktok": returnedApplicant["applicant_tiktok"],
//                 "ambassador_referral_code": returnedApplicant["applicant_referral_code"],
//                 "ambassador_question_one": returnedApplicant["application_question_one"],
//                 "ambassador_question_two": returnedApplicant["applicant_question_two"]
//             };
            
//             connection.query(insertionQuery, requiredValues, function(error, newResults){
//                 if (error){
//                     console.log("Insertion Error");

//                     console.log(error);
//                 } else{
//                     const applicantIdentifier = results[0]["applicant_id"];

                    
//                 }
//             });
//         }
//     });
// });

module.exports = router;