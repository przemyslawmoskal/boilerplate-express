let express = require('express');
let app = express();

path = __dirname + "/public";
app.use(express.static(path));
app.use("/public", express.static(path));

absolutePath = __dirname + "/views/index.html";
app.get("/", function(req, res) {
	res.sendFile(absolutePath);
});



























 module.exports = app;
