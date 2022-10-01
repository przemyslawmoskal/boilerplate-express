require('dotenv').config();

let express = require('express');
let app = express();

// path = __dirname + "/public";
// app.use(express.static(path));
// app.use("/public", express.static(path));

// absolutePath = __dirname + "/views/index.html";
// app.get("/", function(req, res) {
	// res.sendFile(absolutePath);
// });

// app.get("/json", function(req, res) {
// 	res.json({
//		"message": "Hello json"
//	});
// });

// app.get("/json", function(req, res) {
	// if(process.env.MESSAGE_STYLE === "uppercase") {
		// res.json({
			// "message": "HELLO JSON"
		// });
	// } else {
		// res.json({
			// "message": "Hello json"
		// });
	// }
// });

// app.get("/json", function(req, res) {
	// if(process.env.MESSAGE_STYLE === "uppercase") {
		// res.json({
			// "message": "HELLO JSON"
		// });
	// } else {
		// res.json({
			// "message": "Hello json"
		// });
	// }
// });

// app.use(function(req, res, next) {
	// console.log(req.method + " " + req.path + " - " + req.ip);
	// next();
// });

// var delayInMilliseconds = 1000;

// app.get('/now', function(req, res, next) {
	// req.time = new Date().toString();
	// next();
// }, function(req, res) {
	// setTimeout(function() {
		// res.send({
			// time: req.time
		// })
	// }, delayInMilliseconds);
// });

app.get("/:word/echo", (req, res) => {
	const {word} = req.params;
	res.json({
		echo: word
	});
});

module.exports = app;