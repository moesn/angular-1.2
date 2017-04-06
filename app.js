/**
 * Created by zhaohuaming.
 */
'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// 全局变量
global.__LDS = require('lodash');
global.__MMT = require('moment');
global.__MSN = require('moesn');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'views')));

var api = require(path.join(__dirname, 'api/api.js'));
app.use('/api', api);

app.use(function (req, res, next) {
    var err = new Error('Not Found!!!');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.locals = {
        status: err.status,
        message: err.message
    };
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
