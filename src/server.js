"use strict";
exports.__esModule = true;
var dotenv = require('dotenv');
var express = require('express');
var stock_1 = require("./stock");
dotenv.config();
var app = express();
var port = process.env.PORT;
app.use(express.json());
app.post('/update-stock', function (request, response) {
    var status = 1;
    var input = request.body;
    if (Array.isArray(input))
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var stock = input_1[_i];
            status *= (0, stock_1.updateStock)(stock) ? 1 : 0;
        }
    else
        status = (0, stock_1.updateStock)(input) ? 1 : 0;
    response.json({ success: status === 1 });
});
app.post('/availability', function (request, response) {
    var inputs = request.body;
    response.json((0, stock_1.checkStock)(inputs));
});
app.post('/best-deal', function (request, response) {
    var inputs = request.body;
    response.json((0, stock_1.checkBestDeal)(inputs));
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
module.exports = app;
