require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const path = require("path");

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

const app = express();

app.use(express.static(path.resolve(__dirname + "/public")));
app.use(express.urlencoded({extended : false}));

app.set("view engine", "hbs");

app.get("/", function(req, res){
    res.send("Hello World");
});

app.get("/*", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Application Started");
});