require("dotenv").config();

const dataRoutes = require("./routes/dataRoutes.js");
const authenticationRoutes = require("./routes/authenticationRoutes.js");

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, "client/build")));

app.use(cookieParser());

// app.use(morgan("combined"));

// app.use(helmet());

// const corsOptions = {
//     origin: "https://frich-ambassadors.herokuapp.com",
//     credentials: true
// };
  
// app.use(cors(corsOptions));

app.use("/api", dataRoutes);
app.use("/authentication", authenticationRoutes);

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Application Started");
});