require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, "client/build")));

const dataRoutes = require("./routes/dataRoutes.js");

app.use("/api", dataRoutes);

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname+"/client/build/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Application Started");
});