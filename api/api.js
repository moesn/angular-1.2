/**
 * Created by zhaohuaming.
 */
'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

fs.readdirSync(__dirname).forEach(function (dir) {
    var dirPath = path.join(__dirname, dir);
    if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
        fs.readdirSync(dirPath).forEach(function (file) {
            var model = require(path.join(dirPath, file));
            __LDS.keys(model).forEach(function (method) {
                router.post('/' + dir + '/' + path.parse(file).name + '/' + method, model[method]);
            });
        });
    }
});

module.exports = router;
