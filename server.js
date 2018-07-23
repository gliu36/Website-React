const express = require('express');
const app = express();

var port = process.env.PORT || 8080
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'build')));

app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.listen(port, function() {
    console.log("app running");
})