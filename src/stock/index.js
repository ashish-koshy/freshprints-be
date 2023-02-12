"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.checkBestDeal = exports.checkStock = exports.updateStock = void 0;
var enums_1 = require("../enums");
var data_1 = require("../data");
function updateStock(input) {
    var _a;
    try {
        var stocks = (0, data_1.getData)(enums_1.Entity.stock);
        (_a = stocks === null || stocks === void 0 ? void 0 : stocks.filter(function (search) {
            return search.apparel_id === input.apparel_id
                && search.size === input.size;
        })) === null || _a === void 0 ? void 0 : _a.map(function (stock) {
            (input === null || input === void 0 ? void 0 : input.units) >= 0 && (stock.units = input.units);
            (input === null || input === void 0 ? void 0 : input.unit_price) >= 0 && (stock.unit_price = input.unit_price);
            return stock;
        });
        return (0, data_1.setData)(enums_1.Entity.stock, JSON.stringify(stocks, null, 4));
    }
    catch (ex) {
        console.log(ex);
        return false;
    }
}
exports.updateStock = updateStock;
function checkStock(inputs) {
    var _a;
    try {
        var results_1 = [];
        var stocks = (0, data_1.getData)(enums_1.Entity.stock);
        var _loop_1 = function (input) {
            (_a = stocks === null || stocks === void 0 ? void 0 : stocks.filter(function (search) {
                return search.apparel_name === input.apparel_name
                    && search.size === input.size
                    && search.units > 0;
            })) === null || _a === void 0 ? void 0 : _a.map(function (stock) {
                results_1.push(__assign(__assign({}, input), { unit_price: stock.unit_price, available_units: stock.units, producer: stock.producer }));
            });
        };
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            _loop_1(input);
        }
        return results_1;
    }
    catch (ex) {
        console.log(ex);
        return [];
    }
}
exports.checkStock = checkStock;
function checkBestDeal(inputs) {
    try {
        var results = [];
        var availability = checkStock(inputs);
        var hashMap_1 = {};
        availability.forEach(function (item) { return hashMap_1[item.apparel_name] = item; });
        for (var _i = 0, availability_1 = availability; _i < availability_1.length; _i++) {
            var stock = availability_1[_i];
            if (stock.unit_price < hashMap_1[stock.apparel_name].unit_price)
                hashMap_1[stock.apparel_name] = stock;
        }
        for (var key in hashMap_1)
            results.push(hashMap_1[key]);
        return results;
    }
    catch (ex) {
        console.log(ex);
        return [];
    }
}
exports.checkBestDeal = checkBestDeal;
