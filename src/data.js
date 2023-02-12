"use strict";
exports.__esModule = true;
exports.setData = exports.getData = void 0;
var fs_extra_1 = require("fs-extra");
function getFileName(entity) {
    return "".concat(__dirname, "/\\").concat(entity, "/\\data.json");
}
function getData(entity) {
    try {
        var data = (0, fs_extra_1.readFileSync)(getFileName(entity), 'utf8');
        return JSON.parse(data);
    }
    catch (_a) {
        return {};
    }
}
exports.getData = getData;
function setData(entity, data) {
    try {
        (0, fs_extra_1.writeFileSync)(getFileName(entity), data, 'utf8');
        return true;
    }
    catch (_a) {
        return false;
    }
}
exports.setData = setData;
