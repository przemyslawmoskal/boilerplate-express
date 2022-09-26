let express = require('express');
let app = express();
console.log("Hello World");
// app.get("/", function(req, res) {
// 	res.send("Hello Express");
// });
// absolutePath = __dirname + "/views/index.html";
// app.get("/", function(req, res) {
// 	res.sendFile(absolutePath);
// });
path = __dirname + "/public";
app.use("/public", express.static(path));





























 module.exports = app;
