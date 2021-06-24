require("dotenv").config();

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(morgan("combined"));

app.use(helmet());

// const whitelist = ["http://localhost:3000/", "https://frich-ambassadors.herokuapp.com/"]

// const corsOptions = {
//   origin: function (origin, callback){
//     if (whitelist.indexOf(origin) !== -1){
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   }
// };

// app.use(cors(corsOptions));

app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, "client/build")));

const dataRoutes = require("./routes/dataRoutes.js");
const applicantRoutes = require("./routes/applicantRoute.js")

app.use("/api", dataRoutes);
app.use("/applicant", applicantRoutes);

// app.get('/api/getList', (req,res) => {
//     const list = ["item1", "item2", "item3"];

//     res.json(list);

//     console.log('Sent list of items');
// });

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname+"/client/build/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Application Started");
});