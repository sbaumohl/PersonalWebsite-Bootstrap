const express = require("express");
const compression = require("compression");
const app = express();
const config = require("./protected/config.js");
const request = require("request");
var bodyParser = require("body-parser");
const port = 3000;

// gzip compression
app.use(compression());
// home page
app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
// redirect /index.html to / to have a single hompage callable from both spots
app.get("/index.html", (req, res) => res.redirect("/"));
// assets and pages are used throughout the site and everything should be public
app.use("/assets", express.static("assets"));

app.use("/pages", express.static("pages"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/special/password", function(req, res) {
  request(
    {
      method: "POST",
      uri: "http://127.0.0.1:5000/api/v2/resume",
      body: JSON.stringify({
        passcode: req.body.passcode
      }),
      headers: {
        "content-type": "application/json",
        apikey: config.api_key_name,
        apipassword: config.api_key_password
      }
    },
    function(e, r, body) {
      res.send(body);
    }
  );
});

// start app
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
