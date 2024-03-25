const express = require('express'); // Line that loads the express module
const app = express(); // Instance of Express
const router = express.Router();
const path = require('path'); // Load the "Path" Module

router.get("/", function(req, res) {
    console.log("Get request");
    res.sendFile(path.join(__dirname,"index.html"));
});

app.use("/", router);

let server = app.listen(3000, function() {
    console.log("App server is running on port 3000");
    console.log("To end, press CTRL + C");
});