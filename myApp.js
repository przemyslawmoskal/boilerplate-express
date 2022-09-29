require('dotenv').config();

let express = require('express');
let app = express();

path = __dirname + "/public";
app.use(express.static(path));
app.use("/public", express.static(path));

// absolutePath = __dirname + "/views/index.html";
// app.get("/", function(req, res) {
// 	res.sendFile(absolutePath);
// });

// app.get("/json", function(req, res) {
// 	res.json({
//		"message": "Hello json"
//	});
// });

app.get("/json", function(req, res) {
	if(process.env.MESSAGE_STYLE === "uppercase") {
		res.json({
			"message": "HELLO JSON"
		});
	} else {
		res.json({
			"message": "Hello json"
		});
	}
});


























 module.exports = app;
