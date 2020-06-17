const express = require("express");
const config = require("./protected/prod.config.js");
const port = 3000;
const app = express();
//middleware
var compression = require("compression");
var request = require("request");
var favicon = require("serve-favicon");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

//favicon
app.use(favicon(path.join(__dirname, "/assets/icons", "favicon.ico")));
// gzip compression
app.use(compression());
// CORS
app.use(cors());
var corsOptions = {
  origin: config.request_api_origin,
  optionsSuccessStatus: 200
};
// compression
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// home page
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
// redirect /index.html to / to have a single hompage callable from both spots
app.get("/index.html", (req, res) => res.redirect("/"));

//redirect /pgp to pgp.text
app.get("/pgp", (req, res) => res.redirect("/assets/pgp/key.txt"));

// assets and pages are used throughout the site and everything should be public
app.use("/assets", express.static("assets"));

app.use("/dist", express.static("node_modules/bootstrap/dist"));

//this POST acts as an inbetween to connecting the resume.js Jquery request to the Flask API
app.post("/special/password", cors(corsOptions), function(req, res) {
  var passwordInput = req.body.passcode;
  for (var codeIndex = 0; codeIndex < config.codes.length; codeIndex++) {
    if (passwordInput === config.codes[codeIndex]) {
      res.sendFile("./protected/resume/resume.pdf", { root: __dirname });
    }
  }
});

// Crab Rave Prank
app.get("/passwords/secret.html", (req, res) =>
  res.redirect("https://youtu.be/LDU_Txk06tM?t=75")
);

// start app
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
