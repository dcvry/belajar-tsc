"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1();
var PORT = 8000;
app.get('/', function (req, res) { return res.send('Express + TypeScript Server'); });
app.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:" + PORT);
});
